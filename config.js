// =====================================================================
//  הגדרות החיבור של אפליקציית ניהול הסניף - גו קנטינה נוריות
//  ממלאים פעם אחת לפי מדריך ההתקנה (README.md), שלב 3.
//  חשוב: זה פרויקט Firebase חדש ונפרד מזה של המלונות.
// =====================================================================
window.APP_CONFIG = {

  // מעתיקים מ-Firebase Console ← Project settings ← Your apps ← SDK setup and configuration ← Config
  firebase: {
    apiKey: "AIzaSyCOQnqwmHOAohoMLVjvz-VLZoq3LiLNxjY",
    authDomain: "go-cantina.firebaseapp.com",
    projectId: "go-cantina",
    storageBucket: "go-cantina.firebasestorage.app",
    messagingSenderId: "1013120272647",
    appId: "1:1013120272647:web:fce930234c49bba23d5da2"
  },

  // המייל של בעל המערכת. רק הוא יכול להוסיף סניפים ולמנות מנהלים.
  // חייב להיות זהה למייל שמופיע בקובץ firestore.rules.
  ownerEmail: "kfirdaabul1@gmail.com",

  // הכתובת של האפליקציה, לשימוש בהודעת הוואטסאפ לעובדים. אפשר להשאיר ריק.
  appUrl: "",

  // כניסה עם SMS. דורש חשבון חיוב (Blaze) ב-Firebase ועולה כסף לכל הודעה.
  enablePhone: false
};
