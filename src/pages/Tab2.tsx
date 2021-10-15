import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonLabel,
    IonPopover,
    IonCardContent,
    IonItem,
    IonList,
    IonListHeader,
    useIonPopover,
} from '@ionic/react';
import PageLanding from '../components/PageLanding';
import {personCircleOutline, ellipsisHorizontalOutline, scanOutline} from 'ionicons/icons';
import './Tab2.css';
import React, { useState } from 'react';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
const Tab2: React.FC = () => {
    const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
    // const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        alert(`Barcode data: ${data.text}`);
    };
    const scanQrCode = () => {
        openScanner()
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
                <IonIcon  slot="start" icon={personCircleOutline} style={{fontSize: "24px",color:"blue", margin: '0 8px'}}/>

          <IonLabel >欢迎您，zfwbsy</IonLabel>
            <IonButtons slot="end">
                <IonButton onClick={
                    (e: any) => {
                        e.persist();
                        setShowPopover({ showPopover: true, event: e })
                    }}>
                    <IonIcon icon={ellipsisHorizontalOutline} slot="icon-only" ></IonIcon>
                </IonButton>
                <IonPopover
                    cssClass='my-custom-class'
                    event={popoverState.event}
                    isOpen={popoverState.showPopover}
                    onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                >
                    <IonItem onClick={scanQrCode}>
                        <IonIcon icon={scanOutline}></IonIcon>
                        <IonLabel style={{textIndent:"1em"}}>扫一扫中心平台授权登录</IonLabel>
                    </IonItem>
                </IonPopover>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/*<IonHeader collapse="condense">*/}
        {/*  <IonToolbar>*/}
        {/*    <IonTitle>tab2</IonTitle>*/}
        {/*  </IonToolbar>*/}
        {/*</IonHeader>*/}
        <PageLanding />
      </IonContent>
    </IonPage>
  );
};
// const PopoverList: React.FC<{
//     onHide: () => void;
// }> = ({ onHide }) => (
//     <IonList>
//         <IonListHeader>Ionic</IonListHeader>
//         <IonItem button>Learn Ionic</IonItem>
//         <IonItem button>Documentation</IonItem>
//         <IonItem button>Showcase</IonItem>
//         <IonItem button>GitHub Repo</IonItem>
//         <IonItem lines="none" detail={false} button onClick={onHide}>
//             Close
//         </IonItem>
//     </IonList>
// );
export default Tab2;
