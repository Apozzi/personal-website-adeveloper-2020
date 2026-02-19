import * as firebase from 'firebase/app';
import 'firebase/firestore';

export async function trackPageVisit(pageName = 'unknown-page') {
  try {
    const referrer = document.referrer || '';
    if (referrer.toLowerCase().includes('duckduckgo.com')) {
      return;
    }

    const ipRes = await fetch('https://free.freeipapi.com/api/json');
    const data = ipRes.ok ? await ipRes.json() : {};

    if (data.isProxy === true) return;
    const db = firebase.firestore();

    await db.collection('page_visits').add({
      page: pageName,
      ip: data.ipAddress,
      cidade: data.cityName || null,
      estado: data.regionName || null,
      pais: data.countryName || null,
      referrer: referrer || 'direct',
      userAgent: navigator.userAgent.substring(0, 500),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      url: window.location.href,
      operadora: data.asnOrganization,
      language: navigator.language,
      languages: navigator.languages
    });
  } catch (err) {
  }
}
