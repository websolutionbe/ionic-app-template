<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/tabs/dashboard">
          <ion-icon :icon="homeOutline" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="alerts" href="/tabs/alerts">
          <ion-icon :icon="notificationsOutline" />
          <ion-label>Alerts</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="buddy-builds" href="/tabs/buddy-builds">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Buddy Builds</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="business" href="/tabs/business">
          <ion-icon :icon="briefcaseOutline" />
          <ion-label>Business</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue'
import { homeOutline, notificationsOutline, peopleOutline, briefcaseOutline } from 'ionicons/icons'
</script>