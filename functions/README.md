# 📫 ITU LAN Recruitment Service

A Google Firebase Function responsible for sending e-mails about crew applications.

## ▶️ Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### 🧰 Prerequisites

The developer should have installed the [Firebase CLI](https://firebase.google.com/docs/cli). The CLI is used to configure and deploy the project.

### 🔏 Environment variables

This project uses environment variables to store sensitive data about authentication and mail recipients. The environment variables has the follwing structure:

```json
{
  "mail": {
    "dest": "string"
  },
  "auth": {
    "password": "string",
    "email": "string"
  }
}
```

The `auth` object refers to a user's @itulan.dk credentials.

The `mail` object refers to whom the applications should be sent to.

To get the current environment, use the following command:

```bash
$ firebase functions:config:get
```

To set a variable, use the following syntax:

```bash
$ firebase functions:config:set mail.dest="your@email.dk"
```

## 🔥 Deployment

Deployment happens through the Firebase CLI from the root folder:

```bash
firebase deploy
```

## 🛠 Built With

- [Firebase Functions](https://firebase.google.com/) - Google Firebase Functions

## 🖋 Authors

- **Kasper Olsen** - _Initial work_ - [svopper](https://github.com/svopper)

See also the list of [contributors](https://github.com/svopper/itulan.dk/contributors) who participated in this project.

## 📝 License

This project is licensed under the public domain. Feel free to steal the code, modify the code, redistribute the code, or whatever you can come up with. No need to credit anyone.
