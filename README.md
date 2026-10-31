# OmniGo — One App. Everything Connected.

বাংলাদেশ-ফার্স্ট মাল্টি-সার্ভিস সুপার অ্যাপ (ই-কমার্স, সার্ভিস বুকিং, রাইড)।

## বর্তমান অবস্থা: Phase 1 (স্ক্যাফোল্ড)
- ✅ রেপো কাঠামো, ব্র্যান্ড লোগো, লাল/কালো/সাদা থিম
- ✅ API health check (`GET /v1/health`), Postgres migration (users, identities, roles, audit)
- ✅ CI: API টেস্ট + migration যাচাই + Android debug APK + web বিল্ড
- ❌ এখনো নেই: লগইন/OTP, পেমেন্ট, রাইড, প্রোডাক্ট (পরের Phase-এ)
- ⚠️ কোনো আসল পেমেন্ট/ভেরিফিকেশন/লাইভ ট্র্যাকিং নেই।

## ফোন থেকে GitHub-এ তোলা
1. GitHub-এ নতুন repo খুলুন (নাম: `omnigo`)।
2. zip এক্সট্র্যাক্ট করে Add file → Upload files দিয়ে সব ফাইল তুলুন (`.github` ফোল্ডারসহ)।
3. Actions ট্যাবে `CI` রান হবে। শেষে **Artifacts → omnigo-debug-apk** থেকে APK নামান।
4. লাল ❌ এলে ওই লগ কপি করে আমাকে দিন, আমি ঠিক করে দেব।

## লোকাল রান
`cd services/api && cp .env.example .env && npm install && npm test && npm run dev`

## Release signing
Keystore কখনো commit করবেন না; GitHub Secrets-এ রাখুন (Phase 6-এ ডকুমেন্ট হবে)।
