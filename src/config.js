export default {
  fileSystem: {
    path: './DB',
  },
  mongodb: {
    cnxStr: 'mongodb://localhost:/ecommerce',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  firebase: {
    type: 'service_account',
    project_id: 'ecommerce-mongo',
    private_key_id: 'ec9e31e930c9ba3ce4ab37c079c1ae15637b8bfa',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChR6V/ApwMI4oV\nI5IkPlXQrn4K60pn4/CL7YsW287GLPpcO58IvbPl8p519z6ptKELBXCsGUjhp8pG\n5VfuxrSuV1fgCYzNVu4Fm5GpK0sL7Yk7ORiukvPRXqntkvzHHo4tn4vnoYjS9Wam\ncDjOhpJ1PRm5Vp1N5WEXMHFaKUeeD2VSsn+qdfWyP2K/d/7W2EkvrbBrctg8Fqdm\nlg4ATFuZiDArfQhV5YwBezjDLZLszFnzEIMUsnaB2HrxxDhKcbkvQ4/Mea1EKiVw\nGYz337VDp2R0zDw8dfFnVetyQXIJol9WIcfxp3KdzWA4v2dLuyWH7lq5UqS+Bbni\nPKKJBt/pAgMBAAECggEASeaYkOBTPMS0KweHmY/uppauLrat+3jY6mVIjIrf7rMB\nbW3sa4bxffZ0Yb2POxgHixNNE67qVGwcJexFJKZseE6Rd5koqZahrnQghJHP64FG\nlpqNEsFHc7Kazr/BkEQSBhnLc7HzDidgh/d4MDo9tfbvaJulrOHkYUnTRusPY/8T\nnvGgQejTIHgZJWvscEl5EiWI2muLog3zAcWT2GSyh4k58IG2SiaB1u9j1t4lhzAp\ngt3UI6Ut0WnA2cMLSmyfHLC+Dv976htLl1XNmJFl48uQIx+IFG9P3R8+Twa8DN3H\nb+ak5R5QT7oyrAn6IKPtS03oENzWzINHECz3ckcdmQKBgQDT9XDtXiaOo/L7kG+t\n3+YxlIIKW1sjoJSnoxSgMdjAFTt+RpFT8eV2UPS/3p8hRQj1ErLP2bDuRlk1SNFJ\nghf1jg7sC1LZGEzwTlLFeiY/A41q/COq7Ui/SGyezwppIrV6dMzIQkweMgST15y8\nyxzPX1nq6vN3feV5t2MdCgBY5wKBgQDCynt+7wXBpYBFclXTNHHD5VBqiwRWMKlS\n0JPhP+mDyCADJ6xF9iA0z1LOJ95Ra5BOtAIvrh0ffddDT62VPhiWYsnIiGFekQsS\n1vwnV0TjyLUpIt4cNnoR6QrKJ4/weS2uFeDVO8RgmBeMEPZrvM2dnrkzemCuFTp+\nXnnGJ5/WrwKBgBMfrP2tpfrureimonzkm6dTh9wZXAK95UuuuhiuBqlmAQUmpswV\nIifnq/13v5HH4cQC2OFJ+d21uSzGkiN4umKsW4pOhz4RJDf2SR+KItNCpcrGTw2H\n9S1VAn/dnEnaGNegnC1hVe7Pgnw4UurxxHqtVraMVkUstbyioC2pjlh3AoGADD1Y\n4TL3s6FInBSBHBJRi7OfB/LQRPIt0YxVnnO7opIyoMAfbQ34HBli5J1QtOEDYk6h\nTImuPspTemFJUPVj6h8u+rDHHYATqA1mLrqnE4ELERilyDQMG4//I5C01LFok2XA\niOWGg2NLJ3vxX/evG9ZbYMaxyH6A/GvHTxIyUvUCgYBwtE1CPQ5XzBn91mt1Ut06\nwA1dsJzutj/XQPR1/PvbM/yG7/TAj2pvwxLTtkWZv/Vx+tyW81wNyiacKN4M+ZXQ\n4h1Pt8jXoz8T5NXb5coZJ6x7rYX4ARF8lJ+YMKwtyHdk9ptay3Yvh0UcilcXop/2\n2M5MTmGEI/km/iqS90px8w==\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-x1xz5@ecommerce-mongo.iam.gserviceaccount.com',
    client_id: '109204100474548623937',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x1xz5%40ecommerce-mongo.iam.gserviceaccount.com',
  },
  sqlite3: {
    client: 'sqlite3',
    connection: {
      filename: './../DB/ecommerce.sqlite',
    },
    useNullAsDefault: true,
  },
  mariaDb: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'coderhouse',
    },
  },
};
