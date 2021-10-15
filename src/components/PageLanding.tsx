import {withRouter} from "react-router";
import {IonCard, IonCardContent, IonIcon, IonCardTitle, IonCardHeader, IonGrid, IonRow, IonCol} from "@ionic/react";
import {desktopOutline} from "ionicons/icons";
import React from "react";

const PageLanding: React.FC = () => {
    return (
        <div className="page-landing">
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle style={{fontSize:'18px',borderBottom:"1px solid #999",paddingBottom: "1em"}}>业务功能</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div style={{height:"80px"}}>通讯录<br/><span style={{fontSize:"12px"}}>建设中...</span></div>
                            </IonCol>
                            <IonCol>
                                <div>个人中心<br/><span style={{fontSize:"12px"}}>建设中...</span></div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div style={{height:"80px"}}>代办消息<br/><span style={{fontSize:"12px"}}>建设中...</span></div>
                            </IonCol>
                            <IonCol>
                                <div>消息发送<br/><span style={{fontSize:"12px"}}>建设中...</span></div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default withRouter(PageLanding);
