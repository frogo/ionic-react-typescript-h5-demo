import './ExploreContainer.css';
import React, { useState } from 'react';
import {IonButton, IonContent, IonCardHeader, IonInput, IonCard, IonItem, IonIcon, IonLabel, useIonAlert , IonCardContent} from "@ionic/react";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import {personOutline, desktopOutline, lockClosedOutline, logIn} from 'ionicons/icons';
import {useHistory} from 'react-router-dom';

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    const [present] = useIonAlert();
    const history = useHistory();
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);
    };
    const [text, setText] = useState<string>();
    const [pwd, setPwd] = useState<string>();
    const logIn = () => {
        // let invalidUser = ['fybsy','gabsy','jcybsy']
      if(text === ('fybsy' || 'gabsy' || 'jcybsy')) {
          showAlert('该用户无权限')
      } else if (text === 'zfwbsy') {
          if(!pwd) {
              showAlert('请输入密码')
              return
          }
          history.push('/tab2')
      } else {
          showAlert('请输入正确的用户名和密码')
      }
    }
    const showAlert =(txt: string) =>
    present({
        cssClass: 'my-css',
        header: '系统提示',
        message: txt,
        buttons: [{ text: 'Ok', handler: (d) => console.log('ok pressed') }],
        onDidDismiss: (e) => console.log('did dismiss'),
    })

  return (
    <div className="container">

        <IonCard>
            <IonCardContent>
                <IonIcon icon={desktopOutline} size="large" slot="start" style={{fontSize:'100px!important'}}/>
            </IonCardContent>
            <IonCardContent>
            <IonItem>
                <IonIcon icon={personOutline} size="small" slot="start" />
                <IonInput value={text} placeholder="请输入用户名称" onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
                <IonIcon icon={lockClosedOutline} size="small" slot="start" />
                <IonInput placeholder="请输入密码" type="password" onIonChange={e => setPwd(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCardContent>
            <IonCardContent>
                <IonButton expand="full"  onClick={logIn}>登录</IonButton>
            </IonCardContent>
        </IonCard>
    </div>
  );
};

export default ExploreContainer;
