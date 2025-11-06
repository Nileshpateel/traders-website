// Bilingual FAQ Data
const faqs = [
  // 🌱 1. BASIC UNDERSTANDING
  {
  q_en: "What is trading?",
  a_en: "Trading means buying and selling financial instruments such as stocks, commodities (like gold, silver, or oil), currencies (like USD/INR or XAUUSD), or cryptocurrencies with the goal of making a profit. In simple words, traders try to buy at a lower price and sell at a higher price — or in some cases, sell first and buy later if they expect prices to fall.",
  q_mr: "ट्रेडिंग म्हणजे काय?",
  a_mr: "ट्रेडिंग म्हणजे नफा मिळवण्यासाठी शेअर्स, कमोडिटीज (उदा. सोने, चांदी, तेल), चलन (उदा. USD/INR, XAUUSD) किंवा क्रिप्टोकरन्सी यांची खरेदी-विक्री करणे. सोप्या भाषेत सांगायचे तर, ट्रेडर कमी भावात खरेदी करून जास्त भावात विकतो किंवा काही वेळा भाव कमी होतील अशी अपेक्षा असल्यास आधी विकून नंतर खरेदी करतो."
},
  {
    q_en: "How is trading different from investing?",
    a_en: "Trading focuses on short-term price movements for quick profits, while investing is done for long-term wealth creation.",
    q_mr: "ट्रेडिंग आणि इन्व्हेस्टिंग यात काय फरक आहे?",
    a_mr: "ट्रेडिंग म्हणजे अल्पकालीन किंमतीतील बदलांवर नफा मिळवणे, तर इन्व्हेस्टिंग म्हणजे दीर्घकालीन संपत्ती निर्माण करणे."
  },
  {
    q_en: "What are different types of trading?",
    a_en: "The main types are intraday, swing, positional, futures, options, and CFDs. Each has a different time frame and risk level.",
    q_mr: "ट्रेडिंगचे प्रकार कोणते?",
    a_mr: "मुख्य प्रकार म्हणजे इंट्राडे, स्विंग, पोझिशनल, फ्युचर्स, ऑप्शन्स आणि CFDs. प्रत्येकाचा कालावधी व धोका वेगळा असतो."
  },
  {
    q_en: "What is the stock market and how does it work?",
    a_en: "The stock market is a digital platform where people buy and sell company shares through brokers. Prices change based on demand and supply.",
    q_mr: "शेअर बाजार म्हणजे काय आणि तो कसा काम करतो?",
    a_mr: "शेअर बाजार हा एक डिजिटल प्लॅटफॉर्म आहे जिथे लोक ब्रोकर्समार्फत कंपन्यांचे शेअर्स खरेदी-विक्री करतात. किंमत मागणी आणि पुरवठ्यावर अवलंबून असते."
  },
  {
    q_en: "Who are brokers and why do I need one?",
    a_en: "Brokers are registered intermediaries that allow you to buy or sell in the market. You need them to execute trades.",
    q_mr: "ब्रोकर कोण असतात आणि त्यांची गरज का असते?",
    a_mr: "ब्रोकर म्हणजे नोंदणीकृत मध्यस्थ जे तुम्हाला बाजारात खरेदी-विक्री करण्यास मदत करतात. ट्रेड करण्यासाठी त्यांची आवश्यकता असते."
  },
  {
  q_en: "What is NSE, BSE, and SEBI in India?",
  a_en: "NSE (National Stock Exchange) and BSE (Bombay Stock Exchange) are the two main stock exchanges in India where shares of companies are bought and sold. They provide a digital marketplace for trading. SEBI (Securities and Exchange Board of India) is the government regulator that oversees these exchanges, ensures fair practices, and protects investors from fraud or manipulation.",
  q_mr: "NSE, BSE आणि SEBI म्हणजे काय?",
  a_mr: "NSE (नॅशनल स्टॉक एक्स्चेंज) आणि BSE (बॉम्बे स्टॉक एक्स्चेंज) हे भारतातील दोन प्रमुख शेअर बाजार आहेत जिथे कंपन्यांचे शेअर्स खरेदी-विक्री होतात. हे डिजिटल मार्केटप्लेस म्हणून काम करतात. SEBI (सिक्युरिटीज अँड एक्स्चेंज बोर्ड ऑफ इंडिया) ही सरकारी संस्था या बाजारांवर देखरेख ठेवते, प्रामाणिक व्यापार सुनिश्चित करते आणि गुंतवणूकदारांचे संरक्षण करते."
},
  {
    q_en: "What are indices like NIFTY and SENSEX?",
    a_en: "Indices are benchmarks showing the overall market performance. NIFTY represents NSE’s top 50 companies, SENSEX shows BSE’s top 30.",
    q_mr: "NIFTY आणि SENSEX म्हणजे काय?",
    a_mr: "इंडिस म्हणजे बाजाराची एकूण कामगिरी दाखवणारे निर्देशांक. NIFTY मध्ये NSE मधील टॉप 50 कंपन्या आणि SENSEX मध्ये BSE मधील टॉप 30 कंपन्या दाखवल्या जातात."
  },
  {
    q_en: "What are shares, lots, and contracts?",
    a_en: "Shares represent ownership in a company. A lot is a fixed group of shares or units. Contracts are agreements used in futures or options.",
    q_mr: "शेअर्स, लॉट्स आणि कॉन्ट्रॅक्ट्स म्हणजे काय?",
    a_mr: "शेअर्स म्हणजे कंपनीतील मालकीचा भाग. लॉट म्हणजे ठराविक शेअर्सचा समूह. कॉन्ट्रॅक्ट म्हणजे फ्युचर्स किंवा ऑप्शन्ससाठी करार."
  },
  {
    q_en: "What is a CFD (Contract for Difference)?",
    a_en: "CFD allows you to trade on price movements of assets like gold, oil, or forex without owning them.",
    q_mr: "CFD म्हणजे काय?",
    a_mr: "CFD म्हणजे तुम्ही गोल्ड, तेल किंवा फॉरेक्स सारख्या मालमत्तेच्या किंमतीतील बदलांवर व्यापार करू शकता, त्या वस्तू प्रत्यक्ष विकत न घेता."
  },
  {
    q_en: "What are commodities like Gold, Silver, and USOIL?",
    a_en: "These are physical assets traded in commodity markets. Gold = XAUUSD, Silver = XAGUSD, and USOIL represents crude oil.",
    q_mr: "गोल्ड, सिल्व्हर आणि USOIL म्हणजे काय?",
    a_mr: "ही वस्तू कमोडिटी बाजारात ट्रेड केल्या जातात. गोल्ड = XAUUSD, सिल्व्हर = XAGUSD आणि USOIL म्हणजे क्रूड ऑईल."
  },
  {
    q_en: "How is XAU different from Gold and XAG from Silver?",
    a_en: "XAU and XAG are trading symbols used in forex markets for Gold and Silver. They represent their value in USD (e.g., XAUUSD).",
    q_mr: "XAU आणि XAG म्हणजे काय?",
    a_mr: "XAU आणि XAG हे फॉरेक्स मार्केटमध्ये गोल्ड आणि सिल्व्हर साठी वापरले जाणारे सिम्बॉल आहेत. ते USD मध्ये त्यांची किंमत दर्शवतात."
  },
  {
    q_en: "What is cryptocurrency trading?",
    a_en: "It involves buying and selling digital assets like Bitcoin, Ethereum, and Solana for profit through crypto exchanges or CFDs.",
    q_mr: "क्रिप्टोकरन्सी ट्रेडिंग म्हणजे काय?",
    a_mr: "क्रिप्टोकरन्सी ट्रेडिंग म्हणजे बिटकॉइन, इथेरियम, सोलाना सारख्या डिजिटल संपत्तीची खरेदी-विक्री करणे."
  },
  {
    q_en: "How can I start trading in India?",
    a_en: "Open a Demat and trading account with a SEBI-registered broker, complete KYC, add funds, and start small with proper learning.",
    q_mr: "भारतामध्ये ट्रेडिंग कसे सुरू करावे?",
    a_mr: "SEBI नोंदणीकृत ब्रोकरकडे डिमॅट आणि ट्रेडिंग खाते उघडा, KYC पूर्ण करा, निधी भरा आणि योग्य मार्गदर्शनाने लहान गुंतवणुकीने सुरुवात करा."
  },

  // 💰 2. ACCOUNTS & SETUP
  {
    q_en: "What is a Demat account?",
    a_en: "A Demat account stores your shares in digital form, just like a bank account stores money.",
    q_mr: "डिमॅट अकाउंट म्हणजे काय?",
    a_mr: "डिमॅट अकाउंट म्हणजे शेअर्स डिजिटल स्वरूपात ठेवणारे खाते, जसे बँक खाते पैसे ठेवते."
  },
  {
    q_en: "What is a trading account?",
    a_en: "It is used to place buy or sell orders in the stock market through your broker.",
    q_mr: "ट्रेडिंग अकाउंट म्हणजे काय?",
    a_mr: "ट्रेडिंग अकाउंटद्वारे तुम्ही ब्रोकरमार्फत शेअर बाजारात खरेदी-विक्री आदेश देऊ शकता."
  },
  {
    q_en: "What is KYC in trading?",
    a_en: "KYC means Know Your Customer. You submit your PAN, Aadhaar, and bank details for verification.",
    q_mr: "KYC म्हणजे काय?",
    a_mr: "KYC म्हणजे ‘नो युवर कस्टमर’. यात तुम्हाला तुमचा पॅन, आधार आणि बँक तपशील सादर करावे लागतात."
  },
  {
    q_en: "What is leverage and margin?",
    a_en: "Leverage lets you trade bigger with less money. Margin is the deposit needed to open that trade. Both increase potential risk and reward.",
    q_mr: "लेव्हरेज आणि मार्जिन म्हणजे काय?",
    a_mr: "लेव्हरेजमुळे कमी भांडवलात मोठा व्यापार करता येतो. मार्जिन म्हणजे तो व्यापार सुरू करण्यासाठी लागणारी ठेव रक्कम."
  },
  {
    q_en: "How much money do I need to start trading?",
    a_en: "You can start with as low as ₹500 for stock trading or $10 in global CFD/crypto trading. Start small and focus on learning first.",
    q_mr: "ट्रेडिंग सुरू करण्यासाठी किती पैसे लागतात?",
    a_mr: "शेअर ट्रेडिंगसाठी ₹500 आणि जागतिक CFD/क्रिप्टोसाठी $10 पासून सुरुवात करता येते. सुरुवातीला लहान रक्कम ठेवा आणि शिकण्यावर लक्ष केंद्रित करा."
  },
  {
    q_en: "What are brokerage and hidden charges?",
    a_en: "Brokerage is the fee your broker takes per trade. Other charges include GST, STT, and stamp duty as per Indian rules.",
    q_mr: "ब्रोकरज आणि इतर शुल्क काय असतात?",
    a_mr: "ब्रोकरज म्हणजे प्रत्येक ट्रेडवर ब्रोकरकडून घेतले जाणारे शुल्क. तसेच GST, STT आणि स्टँप ड्युटी देखील लागू होतात."
  },
  {
    q_en: "Are there overnight or swap charges in CFDs?",
    a_en: "Yes, when you hold CFD positions overnight, brokers charge swap fees depending on the asset and direction.",
    q_mr: "CFDs मध्ये ओव्हरनाईट चार्जेस असतात का?",
    a_mr: "हो, CFDs मध्ये पोझिशन रात्रीपर्यंत ठेवली तर ब्रोकर्सकडून स्वॅप फी आकारली जाते."
  },

  // 📊 3. MARKET BASICS
  {
    q_en: "What are bull and bear markets?",
    a_en: "A bull market means prices are rising, while a bear market means prices are falling.",
    q_mr: "बुल मार्केट आणि बेअर मार्केट म्हणजे काय?",
    a_mr: "बुल मार्केट म्हणजे किंमती वाढत आहेत, आणि बेअर मार्केट म्हणजे किंमती घसरत आहेत."
  },
  {
    q_en: "What is a candlestick chart?",
    a_en: "It’s a chart that shows price movement using candles — each candle shows open, high, low, and close prices.",
    q_mr: "कँडलस्टिक चार्ट म्हणजे काय?",
    a_mr: "हा असा चार्ट आहे जो किंमतीतील बदल कँडलद्वारे दाखवतो — प्रत्येक कँडल ओपन, हाय, लो आणि क्लोज किंमती दाखवते."
  },
  {
    q_en: "What are support and resistance levels?",
    a_en: "Support is a price level where buying interest appears, and resistance is where selling pressure increases.",
    q_mr: "सपोर्ट आणि रेसिस्टन्स म्हणजे काय?",
    a_mr: "सपोर्ट म्हणजे किंमत खाली गेल्यावर खरेदी वाढते अशी पातळी आणि रेसिस्टन्स म्हणजे किंमत वर गेल्यावर विक्री वाढते अशी पातळी."
  },
  {
    q_en: "What are technical indicators?",
    a_en: "Indicators like RSI, MACD, and Moving Averages help traders analyze market trends and entry points.",
    q_mr: "टेक्निकल इंडिकेटर्स म्हणजे काय?",
    a_mr: "RSI, MACD आणि मूव्हिंग अॅव्हरेजेस सारखे इंडिकेटर्स ट्रेडर्सना ट्रेंड आणि एन्ट्री पॉइंट समजण्यास मदत करतात."
  },

  // ⚙️ 4. TRADING SEGMENTS
  {
    q_en: "What is intraday trading?",
    a_en: "It means buying and selling the same stock on the same day to benefit from small price moves.",
    q_mr: "इंट्राडे ट्रेडिंग म्हणजे काय?",
    a_mr: "एका दिवसातच शेअर खरेदी-विक्री करून किंमतीतील छोट्या बदलांमधून नफा मिळवणे म्हणजे इंट्राडे ट्रेडिंग."
  },
  {
    q_en: "What is options trading?",
    a_en: "Options give you the right (but not obligation) to buy or sell at a fixed price before expiry.",
    q_mr: "ऑप्शन्स ट्रेडिंग म्हणजे काय?",
    a_mr: "ऑप्शन्स ट्रेडिंगमध्ये तुम्हाला ठराविक किंमतीवर खरेदी किंवा विक्री करण्याचा अधिकार मिळतो, पण जबरदस्ती नाही."
  },
  {
    q_en: "What is forex trading?",
    a_en: "Forex trading means exchanging one currency for another to profit from price changes — e.g., USD/INR, EUR/USD.",
    q_mr: "फॉरेक्स ट्रेडिंग म्हणजे काय?",
    a_mr: "फॉरेक्स ट्रेडिंग म्हणजे एक चलन विकून दुसरे खरेदी करणे आणि त्यांच्या दरातील बदलातून नफा मिळवणे."
  },
  {
    q_en: "Can I trade CFDs or crypto from India?",
    a_en: "Legally, you can trade them through SEBI or RBI-approved platforms. Global CFD or crypto brokers may not be regulated in India.",
    q_mr: "भारतामधून CFDs किंवा क्रिप्टो ट्रेडिंग करता येते का?",
    a_mr: "SEBI किंवा RBI-अनुमोदित प्लॅटफॉर्मवर करता येते, पण काही जागतिक ब्रोकर्स भारतात नियमनाखाली नसतात."
  },

  // 🧘 5. RISK & PSYCHOLOGY
  {
    q_en: "Why do most traders lose money?",
    a_en: "Because they trade without proper knowledge, strategy, or emotional control. Trading is not gambling.",
    q_mr: "बहुतेक ट्रेडर्स का नुकसान करतात?",
    a_mr: "कारण ते योग्य ज्ञान, योजना किंवा भावनांवर नियंत्रण न ठेवता ट्रेड करतात. ट्रेडिंग म्हणजे जुगार नाही."
  },
  {
    q_en: "What is risk management?",
    a_en: "It means using tools like stop-loss, position sizing, and diversification to protect capital from big losses.",
    q_mr: "रिस्क मॅनेजमेंट म्हणजे काय?",
    a_mr: "रिस्क मॅनेजमेंट म्हणजे भांडवलाचे नुकसान टाळण्यासाठी स्टॉप-लॉस, पोझिशन साइजिंग आणि विविधीकरण यांचा वापर करणे."
  },
  {
    q_en: "What is FOMO in trading?",
    a_en: "FOMO means Fear of Missing Out — when traders enter trades just because others are making money.",
    q_mr: "ट्रेडिंगमध्ये FOMO म्हणजे काय?",
    a_mr: "FOMO म्हणजे ‘फीअर ऑफ मिसिंग आऊट’ — म्हणजे इतर लोक नफा करत आहेत म्हणून घाईने ट्रेडमध्ये प्रवेश करणे."
  },

  // 🧾 6. PRACTICAL & LEGAL
  {
    q_en: "What are trading hours in India?",
    a_en: "The Indian stock market operates from 9:15 AM to 3:30 PM (Mon–Fri). Commodity and forex markets run longer hours.",
    q_mr: "भारतात ट्रेडिंगचे वेळापत्रक काय आहे?",
    a_mr: "भारतीय शेअर बाजार सोमवार ते शुक्रवार सकाळी 9:15 ते दुपारी 3:30 पर्यंत चालतो. कमोडिटी व फॉरेक्स बाजार जास्त वेळ चालतात."
  },
  {
    q_en: "Do I need to pay tax on trading profits?",
    a_en: "Yes. In India, profits from trading are taxable under capital gains or business income depending on your activity.",
    q_mr: "ट्रेडिंगमधील नफ्यावर कर भरावा लागतो का?",
    a_mr: "होय. भारतात ट्रेडिंगमधील नफा हा कॅपिटल गेन्स किंवा बिझनेस इन्कम म्हणून करपात्र असतो."
  },
  {
    q_en: "Is trading legal and safe in India?",
    a_en: "Yes, trading through SEBI-registered brokers is fully legal and safe. Avoid unregulated foreign brokers.",
    q_mr: "भारतामध्ये ट्रेडिंग कायदेशीर आणि सुरक्षित आहे का?",
    a_mr: "होय, SEBI-नोंदणीकृत ब्रोकरद्वारे ट्रेडिंग करणे पूर्णपणे कायदेशीर आणि सुरक्षित आहे. अनधिकृत ब्रोकर्सपासून दूर राहा."
  },

  // 🚀 7. GROWTH & LEARNING
    {
    q_en: "What is paper trading or demo trading?",
    a_en: "It allows you to practice trading using virtual money before risking real capital.",
    q_mr: "पेपर ट्रेडिंग किंवा डेमो ट्रेडिंग म्हणजे काय?",
    a_mr: "डेमो ट्रेडिंग म्हणजे प्रत्यक्ष पैसे न वापरता आभासी पैशांद्वारे ट्रेडिंगचा सराव करणे. यामुळे अनुभव वाढतो आणि जोखीम न घेता शिकता येते."
  },
  {
    q_en: "How can I track my progress as a trader?",
    a_en: "Maintain a trading journal to record your entries, exits, emotions, and mistakes. Review weekly or monthly to improve.",
    q_mr: "ट्रेडर म्हणून प्रगती कशी मोजावी?",
    a_mr: "आपले ट्रेड्स, भावना आणि चुका लिहून ठेवण्यासाठी ट्रेडिंग जर्नल ठेवा. दर आठवड्याला किंवा महिन्याला त्याचे पुनरावलोकन करा."
  },
  {
    q_en: "What are the best sources to learn trading?",
    a_en: "Start with free content on YouTube, read books like 'Market Wizards' or 'Technical Analysis Explained', and practice regularly.",
    q_mr: "ट्रेडिंग शिकण्यासाठी सर्वोत्तम स्त्रोत कोणते?",
    a_mr: "YouTube वरील मोफत शिक्षण सामग्रीपासून सुरुवात करा, 'Market Wizards' किंवा 'Technical Analysis Explained' सारखी पुस्तके वाचा आणि नियमित सराव करा."
  },
  {
    q_en: "Should I join a paid trading course?",
    a_en: "Paid courses can help if they teach strategy, risk management, and psychology — but always verify the trainer’s credibility first.",
    q_mr: "पेड ट्रेडिंग कोर्स जॉइन करावा का?",
    a_mr: "जर कोर्समध्ये स्ट्रॅटेजी, जोखीम व्यवस्थापन आणि मानसशास्त्र शिकवले जात असेल तर तो उपयोगी ठरू शकतो. परंतु प्रशिक्षकाची विश्वसनीयता प्रथम तपासा."
  },
  {
    q_en: "What are the most common mistakes beginners make?",
    a_en: "Trading without a plan, overtrading, ignoring stop loss, and getting emotional during losses.",
    q_mr: "नवशिके ट्रेडर्स कोणत्या सर्वसाधारण चुका करतात?",
    a_mr: "योजना नसताना ट्रेडिंग करणे, जास्त ट्रेड करणे, स्टॉप लॉस न लावणे आणि नुकसानाच्या वेळी भावनात्मक होणे."
  },

  // 🛡️ 8. REGULATIONS & SAFETY
  {
    q_en: "Who regulates trading in India?",
    a_en: "The Securities and Exchange Board of India (SEBI) regulates all stock, commodity, and derivatives trading activities.",
    q_mr: "भारतामध्ये ट्रेडिंगचे नियमन कोण करते?",
    a_mr: "भारतातील सर्व स्टॉक, कमोडिटी आणि डेरिव्हेटिव्ह ट्रेडिंगचे नियमन सिक्युरिटीज अँड एक्स्चेंज बोर्ड ऑफ इंडिया (SEBI) करते."
  },
  {
    q_en: "Are CFDs legal in India?",
    a_en: "CFDs (Contracts for Difference) are not allowed for retail traders in India. Indian brokers do not offer CFDs legally.",
    q_mr: "भारतामध्ये CFDs कायदेशीर आहेत का?",
    a_mr: "CFDs (Contracts for Difference) भारतात रिटेल ट्रेडर्ससाठी परवानगी नाहीत. भारतीय ब्रोकर्स हे कायदेशीररित्या ऑफर करत नाहीत."
  },
  {
    q_en: "Can I trade gold, silver, or oil from India?",
    a_en: "Yes, you can trade them as commodities on MCX. For CFDs like XAUUSD or USOIL, you must use foreign brokers — at your own risk.",
    q_mr: "मी भारतातून सोने, चांदी किंवा तेल ट्रेड करू शकतो का?",
    a_mr: "होय, आपण MCX वर कमोडिटी म्हणून ट्रेड करू शकता. परंतु XAUUSD किंवा USOIL सारख्या CFD ट्रेडसाठी विदेशी ब्रोकर्सचा वापर करावा लागतो, जोखीम आपली स्वतःची."
  },
  {
    q_en: "What are RBI’s rules for forex and crypto trading?",
    a_en: "RBI restricts forex trading to INR pairs via authorized brokers. Crypto is unregulated in India — trade only via SEBI or RBI-compliant channels.",
    q_mr: "फॉरेक्स आणि क्रिप्टो ट्रेडिंगसाठी RBI चे नियम काय आहेत?",
    a_mr: "RBI ने अधिकृत INR जोड्यांपुरतेच फॉरेक्स ट्रेडिंग मर्यादित ठेवले आहे. क्रिप्टो ट्रेडिंग अजून नियमनाखाली नाही, म्हणून फक्त विश्वसनीय आणि SEBI/RBI-मान्य प्लॅटफॉर्मवरच ट्रेड करा."
  },
  {
    q_en: "Is trading in foreign markets allowed from India?",
    a_en: "Yes, under the Liberalised Remittance Scheme (LRS), you can invest abroad up to $250,000 per year — but only through legal routes.",
    q_mr: "भारतामधून विदेशी बाजारात ट्रेडिंग करणे परवानगी आहे का?",
    a_mr: "होय, Liberalised Remittance Scheme (LRS) अंतर्गत आपण वर्षाला $250,000 पर्यंत कायदेशीरपणे परदेशी बाजारात गुंतवणूक करू शकता."
  },
  {
    q_en: "How can I identify if a broker is genuine?",
    a_en: "Check if the broker is registered with SEBI, verify their registration number, and avoid those promising fixed returns.",
    q_mr: "ब्रोकर्स खरे आहेत की नाही हे कसे तपासावे?",
    a_mr: "ब्रोकर्स SEBI मध्ये नोंदणीकृत आहेत का हे तपासा, त्यांचा नोंदणी क्रमांक पाहा आणि निश्चित नफा देण्याचे आश्वासन देणाऱ्या ब्रोकर्सपासून दूर राहा."
  },
  {
    q_en: "What should I do if I get scammed?",
    a_en: "Report immediately to your bank, Cyber Crime portal (https://cybercrime.gov.in), and SEBI if related to trading platforms.",
    q_mr: "जर मला फसवले गेले असेल तर मी काय करावे?",
    a_mr: "ताबडतोब आपल्या बँकेला कळवा, Cyber Crime Portal (https://cybercrime.gov.in) वर तक्रार करा आणि ट्रेडिंग प्लॅटफॉर्मशी संबंधित असल्यास SEBI ला माहिती द्या."
  },
  {
    q_en: "Is income from trading taxable in India?",
    a_en: "Yes. Profits from trading are taxable under Capital Gains or Business Income depending on your activity level.",
    q_mr: "ट्रेडिंगमधील नफा भारतात करपात्र आहे का?",
    a_mr: "होय. ट्रेडिंगमधून मिळणारा नफा कॅपिटल गेन किंवा व्यवसाय उत्पन्न या श्रेणींमध्ये करपात्र ठरतो, हे आपल्या ट्रेडिंग क्रियाकलापावर अवलंबून असते."
  },
  {
    q_en: "Can minors trade or invest in India?",
    a_en: "Minors cannot trade independently. However, parents or guardians can open accounts on their behalf.",
    q_mr: "अल्पवयीन व्यक्ती भारतात ट्रेड किंवा गुंतवणूक करू शकतात का?",
    a_mr: "अल्पवयीन स्वतः ट्रेड करू शकत नाहीत, परंतु पालक किंवा संरक्षक त्यांच्या नावाने खाते उघडू शकतात."
  },
  {
    q_en: "What safety steps should every trader follow?",
    a_en: "Use strong passwords, enable 2FA, avoid public Wi-Fi, and never share OTP or login details with anyone.",
    q_mr: "प्रत्येक ट्रेडरने कोणती सुरक्षा पावले उचलावीत?",
    a_mr: "मजबूत पासवर्ड वापरा, दोन-स्तरीय प्रमाणीकरण (2FA) सुरू करा, सार्वजनिक Wi-Fi टाळा आणि कधीही OTP किंवा लॉगिन माहिती इतरांसोबत शेअर करू नका."
  },
  {
  q_en: "How can I stay updated with genuine trading and market information?",
  a_en: "Always rely on official sources like NSE, BSE, SEBI, RBI websites, and reputed financial news portals such as Moneycontrol, Economic Times, or Bloomberg. Avoid random Telegram or WhatsApp groups giving trade tips — they often spread misleading or risky information.",
  q_mr: "खरे आणि विश्वसनीय ट्रेडिंग व मार्केट माहिती कशी मिळवावी?",
  a_mr: "नेहमी अधिकृत स्त्रोतांचा वापर करा — NSE, BSE, SEBI, RBI यांच्या वेबसाइट्स आणि Moneycontrol, Economic Times, Bloomberg सारख्या विश्वसनीय आर्थिक न्यूज पोर्टल्स. ट्रेडिंग टिप्स देणाऱ्या अनोळखी Telegram किंवा WhatsApp ग्रुप्सपासून दूर रहा — ते बहुतेक वेळा चुकीची किंवा जोखमीची माहिती देतात."
}

];

// State
let lang = "en";

// Render FAQs
function renderFAQs() {
  const container = document.getElementById("faqContainer");
  container.innerHTML = "";
  faqs.forEach((faq, i) => {
    const q = lang === "en" ? faq.q_en : faq.q_mr;
    const a = lang === "en" ? faq.a_en : faq.a_mr;

    const card = document.createElement("div");
    card.className = "bg-gray-800 border border-gray-700 rounded-2xl shadow-md hover:shadow-cyan-400/20 transition";

    card.innerHTML = `
      <button class="w-full text-left px-5 py-4 font-semibold text-lg text-cyan-300 flex justify-between items-center focus:outline-none faq-btn">
        ${i + 1}. ${q}
        <span class="text-gray-400">+</span>
      </button>
      <div class="hidden px-5 pb-5 text-gray-300">${a}</div>
    `;
    container.appendChild(card);
  });

  // Toggle answers
  document.querySelectorAll(".faq-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const symbol = btn.querySelector("span");
      const open = !content.classList.contains("hidden");
      document.querySelectorAll("#faqContainer div > div").forEach((c) => c.classList.add("hidden"));
      document.querySelectorAll("#faqContainer button span").forEach((s) => (s.textContent = "+"));
      if (!open) {
        content.classList.remove("hidden");
        symbol.textContent = "–";
      }
    });
  });
}

// Toggle language
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "mr" : "en";
  renderFAQs();
});

// Initial render
document.addEventListener("DOMContentLoaded", renderFAQs);
