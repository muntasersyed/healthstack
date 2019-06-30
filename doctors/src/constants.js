import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
    {
    id: 'doctor1',
    name: 'Doctor 1',
    superpower: 'MD'
  },
  {
    id: 'doctor2',
    name: 'Doctor 2',
    superpower: 'MD'
  },
  {
    id: 'doctor3',
    name: 'Doctor 3',
    superpower: 'MD'
  },
  {
    id: 'doctor4',
    name: 'Doctor 4',
    superpower: 'MD'
  }
  ]

export const TERRITORIES = [
  {
    id: 'hospital1',
    name: 'Hospital 1',
    superpower: 'Doctors'
  },
  {
    id: 'hospital2',
    name: 'Hospital 2',
    superpower: 'Doctors'
  },
  {
    id: 'hospital3',
    name: 'Hospital 3',
    superpower: 'Doctors'
  },
  {
    id: 'hospital4',
    name: 'Hospital 4',
    superpower: 'Doctors'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
    app: 'https://decentralised-islands.netlify.com',
    ruler: 'yannael_leborgne.id'
  },
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  },
  {
    app: 'https://animalkingdoms.netlify.com',
    ruler: 'moxiegirl.id.blockstack'
  }
]
