import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export default [
  {
    id: 1,
    username: "ilhamridho04",
    password: "rahasia",
    email: "ilhamridho.ir@gmail.com",
    authToken: "auth-token-8f3ae836da744329a6f93bf20594b5cc",
    refreshToken: "auth-token-f8c137a2c98743f48b643e71161d90aa",
    roles: [1], // Administrator
    pic: toAbsoluteUrl("/media/users/ilhamridho.jpg"),
    fullname: "Ilham Ridho Asysyifa'a",
    firstname: "Ilham",
    lastname: "Ridho Asysyifa'a",
    occupation: "Student",
    companyName: "Kuningan Univeristy",
    phone: "(+62) 812 2202 7633",
    language: "id",
    timeZone: "Asia/Jakarta",
    website: "https://ilhamridho04.github.io",
    emailSettings: {
      emailNotification: true,
      sendCopyToPersonalEmail: true,
      activityRelatesEmail: {
        youHaveNewNotifications: false,
        youAreSentADirectMessage: false,
        someoneAddsYouAsAsAConnection: true,
        uponNewOrder: false,
        newMembershipApproval: false,
        memberRegistration: true,
      },
      updatesFromKeenthemes: {
        newsAboutKeenthemesProductsAndFeatureUpdates: false,
        tipsOnGettingMoreOutOfKeen: false,
        thingsYouMissedSindeYouLastLoggedIntoKeen: true,
        newsAboutMetronicOnPartnerProductsAndOtherServices: true,
        tipsOnMetronicBusinessProducts: true,
      },
    },
    communication: {
      email: true,
      sms: true,
      phone: true,
    },
    address: {
      addressLine: "Jl. Desa Mancagar",
      city: "Kuningan",
      state: "Jawa Barat",
      postCode: "45574",
    },
    socialNetworks: {
      linkedIn: "https://www.linkedin.com/in/ilhamridho04/",
      facebook: "https://facebook.com/ilhamridho.ir",
      twitter: "#",
      instagram: "https://instagram.com/ilhamridho04",
    },
  },
];
