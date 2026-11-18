const UNITS = {
  customer: { en: "Customer services", ar: "خدمة المتعاملين" },
  licensing: { en: "Licensing", ar: "الترخيص" },
  inspection: { en: "Inspection and compliance", ar: "التفتيش والامتثال" },
  legal: { en: "Legal and policy", ar: "الشؤون القانونية والسياسات" },
  corporate: { en: "Corporate services", ar: "الخدمات المؤسسية" },
  tech: { en: "Technology and data", ar: "التقنية والبيانات" },
  comms: { en: "Communications", ar: "الاتصال" },
  leadership: { en: "Leadership and administration", ar: "القيادة والإدارة" }
};

// legal: the task decides something with legal effect on a person or business, so it can never be automated.
// c: "a" automate, "g" augment, "h" keep human-led. s: share of the working week in %.
const ROLES = [
  {
    id: "customer-happiness-officer", unit: "customer", headcount: 90,
    en: "Customer happiness officer", ar: "موظف سعادة المتعاملين",
    tasks: [
      { en: "Answer routine questions on fees and requirements", ar: "الرد على الاستفسارات الروتينية حول الرسوم والمتطلبات", s: 30, c: "a",
        w: ["Answers come from published rules, so an AI agent can give them in both languages.", "الإجابات مستندة إلى قواعد منشورة، فيمكن لوكيل ذكي تقديمها باللغتين."] },
      { en: "Check submitted forms for missing items", ar: "مراجعة النماذج المقدَّمة للتأكد من اكتمالها", s: 20, c: "a",
        w: ["Completeness checks are repetitive pattern matching.", "التحقق من الاكتمال عمل متكرر يعتمد على مطابقة الأنماط."] },
      { legal: true, en: "Resolve complaints and escalations", ar: "حل الشكاوى والحالات المصعّدة", s: 20, c: "g",
        w: ["AI summarises the case history and drafts a reply; the officer decides the remedy.", "يلخّص الذكاء الاصطناعي سجل الحالة ويقترح ردًا، ويقرر الموظف الحل المناسب."] },
      { en: "Support senior citizens and people of determination in person", ar: "دعم كبار المواطنين وأصحاب الهمم حضوريًا", s: 15, c: "h",
        w: ["This needs empathy, patience and judgement, face to face.", "يتطلب ذلك تعاطفًا وصبرًا وحسن تقدير وجهًا لوجه."] },
      { en: "Log interactions and update case records", ar: "تسجيل التفاعلات وتحديث سجلات الحالات", s: 15, c: "a",
        w: ["AI writes the case note straight from the conversation.", "يكتب الذكاء الاصطناعي ملاحظة الحالة مباشرة من المحادثة."] }
    ],
    future: { en: "Customer experience specialist", ar: "أخصائي تجربة المتعاملين",
      d: ["Handles complex cases and supervises the AI service agent.", "يتولى الحالات المعقدة ويشرف على وكيل الخدمة الذكي."] },
    path: [
      { en: "Supervising AI service agents", ar: "الإشراف على وكلاء الخدمة الأذكياء", weeks: 4 },
      { en: "Resolving complex cases", ar: "حل الحالات المعقدة", weeks: 3 },
      { en: "Service design basics", ar: "أساسيات تصميم الخدمات", weeks: 3 }
    ]
  },
  {
    id: "call-centre-agent", unit: "customer", headcount: 70,
    en: "Call centre agent", ar: "موظف مركز الاتصال",
    tasks: [
      { en: "Answer common phone queries", ar: "الرد على الاستفسارات الهاتفية الشائعة", s: 40, c: "a",
        w: ["A voice assistant answers in Arabic and English and hands over when unsure.", "يجيب المساعد الصوتي بالعربية والإنجليزية ويحوّل المكالمة عند الحاجة."] },
      { en: "Book and reschedule appointments", ar: "حجز المواعيد وتعديلها", s: 15, c: "a",
        w: ["A simple transaction on the booking system.", "معاملة بسيطة على نظام المواعيد."] },
      { en: "Handle upset or confused callers", ar: "التعامل مع المتصلين المنزعجين أو المرتبكين", s: 20, c: "h",
        w: ["Calming people down takes a human voice.", "تهدئة المتعاملين تحتاج إلى صوت إنساني."] },
      { en: "Explain complex procedures step by step", ar: "شرح الإجراءات المعقدة خطوة بخطوة", s: 15, c: "g",
        w: ["AI shows the right guidance on screen while the agent talks.", "يعرض الذكاء الاصطناعي الإرشادات المناسبة على الشاشة أثناء المكالمة."] },
      { en: "Write call summaries", ar: "كتابة ملخصات المكالمات", s: 10, c: "a",
        w: ["Generated automatically from the call transcript.", "تُنشأ تلقائيًا من نص المكالمة."] }
    ],
    future: { en: "AI service quality reviewer", ar: "مراجع جودة خدمات الذكاء الاصطناعي",
      d: ["Reviews AI conversations, corrects errors and improves the answers.", "يراجع محادثات الذكاء الاصطناعي ويصحح الأخطاء ويحسّن الإجابات."] },
    path: [
      { en: "Reviewing AI conversations", ar: "مراجعة محادثات الذكاء الاصطناعي", weeks: 3 },
      { en: "Editing the knowledge base", ar: "تحرير قاعدة المعرفة", weeks: 4 },
      { en: "Arabic and English service quality", ar: "جودة الخدمة بالعربية والإنجليزية", weeks: 2 }
    ]
  },
  {
    id: "licensing-officer", unit: "licensing", headcount: 80,
    en: "Licensing officer", ar: "موظف الترخيص",
    tasks: [
      { legal: true, en: "Review new licence applications against the rules", ar: "مراجعة طلبات الترخيص الجديدة وفق الأنظمة", s: 30, c: "g",
        w: ["AI pre-checks every condition and flags gaps; the officer approves.", "يفحص الذكاء الاصطناعي كل شرط ويحدد النواقص، ويعتمد الموظف القرار."] },
      { en: "Verify trade names and activity codes", ar: "التحقق من الأسماء التجارية ورموز الأنشطة", s: 15, c: "a",
        w: ["Database lookups with clear rules.", "بحث في قواعد البيانات وفق قواعد واضحة."] },
      { en: "Request missing documents from applicants", ar: "طلب المستندات الناقصة من المتقدمين", s: 10, c: "a",
        w: ["Standard messages sent automatically after the pre-check.", "رسائل معيارية تُرسل تلقائيًا بعد الفحص الأولي."] },
      { legal: true, en: "Decide on non-standard or high-risk cases", ar: "البتّ في الحالات غير الاعتيادية أو عالية المخاطر", s: 20, c: "h",
        w: ["These need judgement and someone accountable for the decision.", "تتطلب حسن التقدير وجهة مسؤولة عن القرار."] },
      { en: "Advise investors on the right licence type", ar: "إرشاد المستثمرين إلى نوع الرخصة المناسب", s: 15, c: "g",
        w: ["AI suggests options; the officer gives the advice.", "يقترح الذكاء الاصطناعي الخيارات ويقدّم الموظف المشورة."] },
      { en: "Issue licences and update the register", ar: "إصدار الرخص وتحديث السجل", s: 10, c: "a",
        w: ["A system step once the licence is approved.", "إجراء آلي بعد اعتماد الرخصة."] }
    ],
    future: { en: "Licensing case manager", ar: "مدير حالات الترخيص",
      d: ["Owns complex cases end to end and signs off AI recommendations.", "يتولى الحالات المعقدة من بدايتها إلى نهايتها ويعتمد توصيات الذكاء الاصطناعي."] },
    path: [
      { en: "Working with AI decision support", ar: "العمل مع أدوات دعم القرار الذكية", weeks: 3 },
      { en: "Risk-based assessment", ar: "التقييم القائم على المخاطر", weeks: 4 },
      { en: "Advising investors", ar: "تقديم المشورة للمستثمرين", weeks: 3 }
    ]
  },
  {
    id: "document-verification-clerk", unit: "licensing", headcount: 45,
    en: "Document verification clerk", ar: "موظف التحقق من المستندات",
    tasks: [
      { en: "Check documents for authenticity and validity", ar: "فحص المستندات للتأكد من صحتها وسريانها", s: 35, c: "a",
        w: ["Document AI checks stamps, dates and formats, and flags anything doubtful.", "يتحقق الذكاء الاصطناعي من الأختام والتواريخ والصيغ ويرصد أي شك."] },
      { en: "Extract data from scanned documents", ar: "استخراج البيانات من المستندات الممسوحة", s: 30, c: "a",
        w: ["Reliable data extraction in Arabic and English.", "استخراج دقيق للبيانات بالعربية والإنجليزية."] },
      { en: "Match documents to applications", ar: "مطابقة المستندات مع الطلبات", s: 15, c: "a",
        w: ["Rule-based matching.", "مطابقة قائمة على القواعد."] },
      { legal: true, en: "Investigate suspected forgeries", ar: "التحقيق في حالات الاشتباه بالتزوير", s: 20, c: "h",
        w: ["Legal consequences need a human decision.", "العواقب القانونية تستلزم قرارًا بشريًا."] }
    ],
    future: { en: "Document fraud analyst", ar: "محلل احتيال المستندات",
      d: ["Investigates the cases that the AI flags.", "يحقق في الحالات التي يرصدها الذكاء الاصطناعي."] },
    path: [
      { en: "Fraud pattern analysis", ar: "تحليل أنماط الاحتيال", weeks: 4 },
      { en: "Using document AI tools", ar: "استخدام أدوات تحليل المستندات الذكية", weeks: 2 },
      { en: "Evidence and legal procedure", ar: "الأدلة والإجراءات القانونية", weeks: 3 }
    ]
  },
  {
    id: "renewals-officer", unit: "licensing", headcount: 40,
    en: "Renewals officer", ar: "موظف التجديد",
    tasks: [
      { en: "Process standard renewals", ar: "معالجة طلبات التجديد الاعتيادية", s: 45, c: "a",
        w: ["The data rarely changes, so renewals can go through automatically when checks pass.", "البيانات لا تتغير غالبًا، فيمكن التجديد تلقائيًا عند اجتياز الفحوصات."] },
      { en: "Send renewal reminders", ar: "إرسال تذكيرات التجديد", s: 10, c: "a",
        w: ["Scheduled messages.", "رسائل مجدولة."] },
      { legal: true, en: "Review renewals with violations or changes", ar: "مراجعة التجديدات المرتبطة بمخالفات أو تغييرات", s: 25, c: "g",
        w: ["AI summarises the history; the officer decides.", "يلخّص الذكاء الاصطناعي السجل ويقرر الموظف."] },
      { en: "Calculate fees and penalties", ar: "احتساب الرسوم والغرامات", s: 10, c: "a",
        w: ["Fixed formulas.", "معادلات ثابتة."] },
      { legal: true, en: "Handle payment exceptions", ar: "معالجة استثناءات الدفع", s: 10, c: "h",
        w: ["Instalments and waivers need discretion.", "التقسيط والإعفاءات تحتاج إلى تقدير."] }
    ],
    future: { en: "Renewals risk analyst", ar: "محلل مخاطر التجديد",
      d: ["Monitors automated renewals and spots risk patterns.", "يراقب التجديدات الآلية ويرصد أنماط المخاطر."] },
    path: [
      { en: "Monitoring automated processes", ar: "مراقبة العمليات المؤتمتة", weeks: 3 },
      { en: "Dashboard basics", ar: "أساسيات لوحات البيانات", weeks: 3 },
      { en: "Risk indicators", ar: "مؤشرات المخاطر", weeks: 2 }
    ]
  },
  {
    id: "field-inspector", unit: "inspection", headcount: 60,
    en: "Field inspector", ar: "مفتش ميداني",
    tasks: [
      { en: "Inspect business premises on site", ar: "تفتيش المنشآت التجارية ميدانيًا", s: 45, c: "h",
        w: ["Needs physical presence and judgement on site.", "يتطلب الحضور الميداني وحسن التقدير في الموقع."] },
      { en: "Plan inspection routes and priorities", ar: "تخطيط مسارات التفتيش وأولوياته", s: 10, c: "g",
        w: ["AI ranks sites by risk; the inspector adjusts the plan.", "يرتّب الذكاء الاصطناعي المنشآت حسب المخاطر ويعدّل المفتش الخطة."] },
      { en: "Write inspection reports", ar: "كتابة تقارير التفتيش", s: 20, c: "g",
        w: ["AI drafts from photos and voice notes; the inspector signs.", "يصوغ الذكاء الاصطناعي التقرير من الصور والملاحظات الصوتية ويوقّعه المفتش."] },
      { legal: true, en: "Issue violations and warnings", ar: "تحرير المخالفات والإنذارات", s: 15, c: "h",
        w: ["Legal enforcement stays with a person.", "تبقى صلاحية الإنفاذ القانوني بيد الموظف."] },
      { en: "Follow up on corrective actions", ar: "متابعة الإجراءات التصحيحية", s: 10, c: "a",
        w: ["Automatic reminders and photo checks.", "تذكيرات تلقائية وتحقق من الصور."] }
    ],
    future: { en: "Risk-based inspector", ar: "مفتش قائم على المخاطر",
      d: ["Visits the riskiest sites first, guided by AI risk scores.", "يزور المنشآت الأعلى خطورة أولًا وفق مؤشرات المخاطر الذكية."] },
    path: [
      { en: "Risk scoring and data", ar: "تقييم المخاطر والبيانات", weeks: 3 },
      { en: "Mobile inspection tools", ar: "أدوات التفتيش عبر الهاتف", weeks: 2 },
      { en: "Evidence quality", ar: "جودة الأدلة", weeks: 2 }
    ]
  },
  {
    id: "compliance-analyst", unit: "inspection", headcount: 25,
    en: "Compliance analyst", ar: "محلل الامتثال",
    tasks: [
      { en: "Monitor businesses for compliance signals", ar: "رصد مؤشرات الامتثال لدى المنشآت", s: 30, c: "a",
        w: ["AI watches the data feeds continuously.", "يرصد الذكاء الاصطناعي مصادر البيانات بشكل مستمر."] },
      { en: "Analyse cases and recommend action", ar: "تحليل الحالات والتوصية بالإجراء", s: 30, c: "g",
        w: ["AI builds the case file; the analyst recommends the action.", "يُعدّ الذكاء الاصطناعي ملف الحالة ويوصي المحلل بالإجراء."] },
      { en: "Prepare compliance reports for management", ar: "إعداد تقارير الامتثال للإدارة", s: 20, c: "g",
        w: ["AI drafts; the analyst checks the numbers and conclusions.", "يصوغ الذكاء الاصطناعي المسودة ويتحقق المحلل من الأرقام والاستنتاجات."] },
      { en: "Coordinate with other authorities", ar: "التنسيق مع الجهات الأخرى", s: 20, c: "h",
        w: ["Relationships and negotiation.", "علاقات وتفاوض."] }
    ],
    future: { en: "Compliance risk analyst", ar: "محلل مخاطر الامتثال",
      d: ["Reviews the cases AI monitoring flags and reports on risk trends.", "يراجع الحالات التي يرصدها الذكاء الاصطناعي ويعدّ تقارير عن اتجاهات المخاطر."] },
    path: [
      { en: "AI monitoring tools", ar: "أدوات الرصد الذكية", weeks: 3 },
      { en: "Telling stories with data", ar: "سرد القصص بالبيانات", weeks: 2 },
      { en: "Regulatory risk", ar: "المخاطر التنظيمية", weeks: 3 }
    ]
  },
  {
    id: "legal-researcher", unit: "legal", headcount: 12,
    en: "Legal researcher", ar: "باحث قانوني",
    tasks: [
      { en: "Search laws and past decisions", ar: "البحث في القوانين والقرارات السابقة", s: 35, c: "g",
        w: ["AI finds and summarises sources; the researcher checks every citation.", "يبحث الذكاء الاصطناعي ويلخّص المصادر، ويتحقق الباحث من كل مرجع."] },
      { en: "Draft legal opinions", ar: "صياغة الآراء القانونية", s: 30, c: "g",
        w: ["AI writes a first draft; the lawyer owns the opinion.", "يكتب الذكاء الاصطناعي المسودة الأولى، والرأي النهائي مسؤولية القانوني."] },
      { en: "Compare contracts with approved templates", ar: "مقارنة العقود بالنماذج المعتمدة", s: 15, c: "a",
        w: ["Clause comparison flags differences for review.", "مقارنة البنود ترصد الفروقات للمراجعة."] },
      { en: "Advise managers on legal risk", ar: "تقديم المشورة للمديرين بشأن المخاطر القانونية", s: 20, c: "h",
        w: ["Needs accountability and context.", "يتطلب تحمل المسؤولية وفهم السياق."] }
    ],
    future: { en: "Legal knowledge lead", ar: "قائد المعرفة القانونية",
      d: ["Curates the legal knowledge the AI draws on and signs off opinions.", "يدير المعرفة القانونية التي يعتمد عليها الذكاء الاصطناعي ويعتمد الآراء."] },
    path: [
      { en: "Verifying AI legal research", ar: "التحقق من البحث القانوني الآلي", weeks: 2 },
      { en: "Legal knowledge management", ar: "إدارة المعرفة القانونية", weeks: 3 },
      { en: "AI and data protection law", ar: "الذكاء الاصطناعي وقانون حماية البيانات", weeks: 2 }
    ]
  },
  {
    id: "policy-analyst", unit: "legal", headcount: 10,
    en: "Policy analyst", ar: "محلل سياسات",
    tasks: [
      { en: "Gather data and international benchmarks", ar: "جمع البيانات والمقارنات الدولية", s: 25, c: "g",
        w: ["AI collects and summarises; the analyst checks the sources.", "يجمع الذكاء الاصطناعي البيانات ويلخّصها، ويتحقق المحلل من المصادر."] },
      { en: "Analyse the impact of regulations", ar: "تحليل أثر الأنظمة", s: 25, c: "g",
        w: ["AI models scenarios; the analyst weighs the trade-offs.", "يحاكي الذكاء الاصطناعي السيناريوهات ويقيّم المحلل المفاضلات."] },
      { en: "Draft policy papers", ar: "صياغة أوراق السياسات", s: 20, c: "g",
        w: ["AI drafts the structure; the analyst writes the argument.", "يقترح الذكاء الاصطناعي الهيكل ويكتب المحلل الحجة."] },
      { en: "Consult businesses and stakeholders", ar: "التشاور مع المنشآت والجهات المعنية", s: 20, c: "h",
        w: ["Consultation depends on trust and listening.", "التشاور يقوم على الثقة وحسن الإصغاء."] },
      { en: "Format and translate documents", ar: "تنسيق المستندات وترجمتها", s: 10, c: "a",
        w: ["Routine formatting and translation.", "تنسيق وترجمة روتينيان."] }
    ],
    future: { en: "Policy impact analyst", ar: "محلل أثر السياسات",
      d: ["Tests draft policies with AI models before they launch.", "يختبر مسودات السياسات بنماذج الذكاء الاصطناعي قبل إطلاقها."] },
    path: [
      { en: "Scenario modelling with AI", ar: "نمذجة السيناريوهات بالذكاء الاصطناعي", weeks: 4 },
      { en: "Stakeholder engagement", ar: "إشراك الجهات المعنية", weeks: 2 },
      { en: "Regulatory intelligence", ar: "الذكاء التشريعي", weeks: 2 }
    ]
  },
  {
    id: "procurement-officer", unit: "corporate", headcount: 18,
    en: "Procurement officer", ar: "موظف المشتريات",
    tasks: [
      { en: "Prepare tender documents", ar: "إعداد وثائق المناقصات", s: 20, c: "g",
        w: ["AI drafts from templates; the officer tailors the scope.", "يصوغ الذكاء الاصطناعي الوثائق من النماذج ويحدد الموظف النطاق."] },
      { legal: true, en: "Compare supplier bids", ar: "مقارنة عروض الموردين", s: 25, c: "g",
        w: ["AI scores bids against the criteria; the committee decides.", "يقيّم الذكاء الاصطناعي العروض وفق المعايير وتقرر اللجنة."] },
      { en: "Raise and track purchase orders", ar: "إصدار أوامر الشراء ومتابعتها", s: 25, c: "a",
        w: ["A standard workflow with fixed steps.", "إجراء معياري بخطوات ثابتة."] },
      { en: "Negotiate with suppliers", ar: "التفاوض مع الموردين", s: 15, c: "h",
        w: ["Negotiation is a human relationship.", "التفاوض علاقة إنسانية."] },
      { en: "Check supplier compliance documents", ar: "التحقق من مستندات امتثال الموردين", s: 15, c: "a",
        w: ["Document checks against a list.", "فحص المستندات وفق قائمة محددة."] }
    ],
    future: { en: "Strategic sourcing specialist", ar: "أخصائي التوريد الاستراتيجي",
      d: ["Works alongside the procurement AI agent on high-value deals.", "يعمل مع وكيل المشتريات الذكي على الصفقات عالية القيمة."] },
    path: [
      { en: "Using the procurement AI agent", ar: "استخدام وكيل المشتريات الذكي", weeks: 2 },
      { en: "Category strategy", ar: "استراتيجية الفئات", weeks: 3 },
      { en: "Negotiation", ar: "التفاوض", weeks: 2 }
    ]
  },
  {
    id: "accountant", unit: "corporate", headcount: 22,
    en: "Accountant", ar: "محاسب",
    tasks: [
      { en: "Record and reconcile transactions", ar: "تسجيل المعاملات ومطابقتها", s: 35, c: "a",
        w: ["Matching is rules-based and high volume.", "المطابقة قائمة على قواعد وبكميات كبيرة."] },
      { en: "Process invoices and payments", ar: "معالجة الفواتير والمدفوعات", s: 25, c: "a",
        w: ["AI reads invoices and routes them for payment.", "يقرأ الذكاء الاصطناعي الفواتير ويحيلها للدفع."] },
      { en: "Prepare monthly financial reports", ar: "إعداد التقارير المالية الشهرية", s: 20, c: "g",
        w: ["AI drafts the report; the accountant reviews the figures.", "يصوغ الذكاء الاصطناعي التقرير ويراجع المحاسب الأرقام."] },
      { en: "Investigate discrepancies", ar: "التحقيق في الفروقات", s: 10, c: "g",
        w: ["AI flags anomalies; the accountant finds the cause.", "يرصد الذكاء الاصطناعي الحالات الشاذة ويحدد المحاسب السبب."] },
      { en: "Advise on budgets", ar: "تقديم المشورة بشأن الموازنات", s: 10, c: "h",
        w: ["Budget advice involves trade-offs and accountability.", "المشورة في الموازنات تتضمن مفاضلات وتحمل مسؤولية."] }
    ],
    future: { en: "Financial analyst", ar: "محلل مالي",
      d: ["Oversees automated finance and focuses on forecasting.", "يشرف على العمليات المالية المؤتمتة ويركز على التنبؤ."] },
    path: [
      { en: "Overseeing finance automation", ar: "الإشراف على أتمتة العمليات المالية", weeks: 3 },
      { en: "Forecasting with AI", ar: "التنبؤ بالذكاء الاصطناعي", weeks: 3 },
      { en: "Business partnering", ar: "الشراكة مع الإدارات", weeks: 2 }
    ]
  },
  {
    id: "hr-officer", unit: "corporate", headcount: 20,
    en: "HR officer", ar: "موظف الموارد البشرية",
    tasks: [
      { en: "Answer staff questions on policies", ar: "الرد على استفسارات الموظفين حول السياسات", s: 25, c: "a",
        w: ["An HR assistant answers from the policy manual.", "يجيب المساعد الذكي استنادًا إلى دليل السياسات."] },
      { en: "Process leave, letters and records", ar: "معالجة الإجازات والخطابات والسجلات", s: 25, c: "a",
        w: ["Standard transactions with clear rules.", "معاملات معيارية بقواعد واضحة."] },
      { legal: true, en: "Support employee relations cases", ar: "دعم قضايا علاقات الموظفين", s: 20, c: "h",
        w: ["Sensitive and personal; needs a person.", "قضايا حساسة وشخصية تحتاج إلى موظف."] },
      { legal: true, en: "Run performance review cycles", ar: "إدارة دورات تقييم الأداء", s: 15, c: "g",
        w: ["AI prepares the paperwork; managers make the judgements.", "يُعدّ الذكاء الاصطناعي النماذج ويقيّم المديرون."] },
      { en: "Plan the workforce and reskilling", ar: "تخطيط القوى العاملة وإعادة التأهيل", s: 15, c: "g",
        w: ["AI maps skills gaps; HR builds the plan with managers.", "يحدد الذكاء الاصطناعي فجوات المهارات وتضع الموارد البشرية الخطة مع المديرين."] }
    ],
    future: { en: "Workforce transition adviser", ar: "مستشار انتقال القوى العاملة",
      d: ["Guides colleagues into their redesigned roles.", "يرشد الزملاء إلى أدوارهم الجديدة."] },
    path: [
      { en: "Career coaching", ar: "التوجيه المهني", weeks: 3 },
      { en: "Skills data and analytics", ar: "بيانات المهارات وتحليلها", weeks: 3 },
      { en: "Leading change", ar: "قيادة التغيير", weeks: 2 }
    ]
  },
  {
    id: "recruitment-specialist", unit: "corporate", headcount: 8,
    en: "Recruitment specialist", ar: "أخصائي التوظيف",
    tasks: [
      { legal: true, en: "Screen applications against requirements", ar: "فرز الطلبات وفق المتطلبات", s: 30, c: "g",
        w: ["AI ranks applications; a person reviews every rejection, and the model is tested for bias.", "يرتّب الذكاء الاصطناعي الطلبات، ويراجع موظف كل حالة رفض، مع اختبار التحيّز."] },
      { en: "Schedule interviews", ar: "جدولة المقابلات", s: 15, c: "a",
        w: ["Calendar coordination.", "تنسيق المواعيد."] },
      { en: "Write job adverts", ar: "كتابة إعلانات الوظائف", s: 10, c: "g",
        w: ["AI drafts; a person checks the wording is inclusive.", "يصوغ الذكاء الاصطناعي الإعلان ويتحقق الموظف من شمولية الصياغة."] },
      { legal: true, en: "Interview candidates", ar: "إجراء المقابلات مع المرشحين", s: 30, c: "h",
        w: ["Judging people stays with people.", "تقييم الأشخاص يبقى مهمة بشرية."] },
      { en: "Match current staff to open roles", ar: "مطابقة الموظفين الحاليين مع الشواغر", s: 15, c: "g",
        w: ["Skills matching puts internal candidates first.", "مطابقة المهارات تقدّم المرشحين الداخليين أولًا."] }
    ],
    future: { en: "Internal mobility specialist", ar: "أخصائي التنقل الوظيفي الداخلي",
      d: ["Fills new roles from inside the department first.", "يشغل الأدوار الجديدة من داخل الدائرة أولًا."] },
    path: [
      { en: "Fair use of AI in hiring", ar: "الاستخدام العادل للذكاء الاصطناعي في التوظيف", weeks: 2 },
      { en: "Skills-based matching", ar: "المطابقة القائمة على المهارات", weeks: 3 },
      { en: "Interviewing for potential", ar: "المقابلات القائمة على الإمكانات", weeks: 2 }
    ]
  },
  {
    id: "training-coordinator", unit: "corporate", headcount: 8,
    en: "Training coordinator", ar: "منسق التدريب",
    tasks: [
      { en: "Schedule courses and manage enrolment", ar: "جدولة الدورات وإدارة التسجيل", s: 30, c: "a",
        w: ["Routine scheduling and admin.", "جدولة وإجراءات إدارية روتينية."] },
      { en: "Identify staff skills gaps", ar: "تحديد فجوات المهارات لدى الموظفين", s: 25, c: "g",
        w: ["AI compares skills to role needs; the coordinator confirms with managers.", "يقارن الذكاء الاصطناعي المهارات باحتياجات الدور ويؤكدها المنسق مع المديرين."] },
      { en: "Create learning content", ar: "إعداد المحتوى التدريبي", s: 25, c: "g",
        w: ["AI drafts material in both languages; the coordinator checks accuracy.", "يصوغ الذكاء الاصطناعي المحتوى باللغتين ويتحقق المنسق من دقته."] },
      { en: "Coach staff through career changes", ar: "توجيه الموظفين خلال التحول الوظيفي", s: 20, c: "h",
        w: ["Coaching depends on trust.", "التوجيه يقوم على الثقة."] }
    ],
    future: { en: "AI learning designer", ar: "مصمم تعلّم بالذكاء الاصطناعي",
      d: ["Designs the reskilling programmes behind every new role.", "يصمم برامج إعادة التأهيل لكل دور جديد."] },
    path: [
      { en: "Learning design", ar: "تصميم التعلّم", weeks: 3 },
      { en: "AI tutoring tools", ar: "أدوات التعليم الذكية", weeks: 2 },
      { en: "Measuring learning impact", ar: "قياس أثر التعلّم", weeks: 2 }
    ]
  },
  {
    id: "it-support-technician", unit: "tech", headcount: 25,
    en: "IT support technician", ar: "فني دعم تقني",
    tasks: [
      { en: "Reset passwords and access", ar: "إعادة تعيين كلمات المرور والصلاحيات", s: 25, c: "a",
        w: ["Self-service with identity checks.", "خدمة ذاتية مع التحقق من الهوية."] },
      { en: "Solve common software issues", ar: "حل المشكلات البرمجية الشائعة", s: 20, c: "a",
        w: ["A support agent handles known fixes and hands over the rest.", "يعالج وكيل الدعم الحلول المعروفة ويحيل الباقي."] },
      { en: "Fix hardware and network problems", ar: "إصلاح مشكلات الأجهزة والشبكات", s: 25, c: "h",
        w: ["Hands-on work.", "عمل يدوي ميداني."] },
      { en: "Manage access and settings for AI tools", ar: "إدارة صلاحيات أدوات الذكاء الاصطناعي وإعداداتها", s: 15, c: "g",
        w: ["A growing task; AI suggests settings, the technician approves.", "مهمة متنامية، يقترح فيها الذكاء الاصطناعي الإعدادات ويعتمدها الفني."] },
      { en: "Log and categorise tickets", ar: "تسجيل التذاكر وتصنيفها", s: 15, c: "a",
        w: ["Classification from the ticket text.", "تصنيف استنادًا إلى نص التذكرة."] }
    ],
    future: { en: "AI operations technician", ar: "فني عمليات الذكاء الاصطناعي",
      d: ["Keeps AI agents running and responds when they fail.", "يضمن عمل الوكلاء الأذكياء ويتدخل عند تعطلهم."] },
    path: [
      { en: "Monitoring AI agents", ar: "مراقبة الوكلاء الأذكياء", weeks: 3 },
      { en: "Cloud and access basics", ar: "أساسيات السحابة والصلاحيات", weeks: 3 },
      { en: "Incident response", ar: "الاستجابة للحوادث", weeks: 2 }
    ]
  },
  {
    id: "data-analyst", unit: "tech", headcount: 10,
    en: "Data analyst", ar: "محلل بيانات",
    tasks: [
      { en: "Clean and prepare data", ar: "تنظيف البيانات وتجهيزها", s: 30, c: "a",
        w: ["Repeatable data preparation.", "تجهيز متكرر للبيانات."] },
      { en: "Build standard reports", ar: "إعداد التقارير المعيارية", s: 20, c: "a",
        w: ["Scheduled reports refresh themselves.", "التقارير المجدولة تتحدث تلقائيًا."] },
      { en: "Analyse trends to support decisions", ar: "تحليل الاتجاهات لدعم القرار", s: 30, c: "g",
        w: ["AI finds patterns; the analyst tests and explains them.", "يكتشف الذكاء الاصطناعي الأنماط ويختبرها المحلل ويفسرها."] },
      { en: "Present findings to leaders", ar: "عرض النتائج على القيادات", s: 20, c: "h",
        w: ["Leaders need someone to question.", "تحتاج القيادات إلى من تحاوره وتسائله."] }
    ],
    future: { en: "AI product analyst", ar: "محلل منتجات الذكاء الاصطناعي",
      d: ["Designs new AI uses and measures their impact.", "يصمم استخدامات جديدة للذكاء الاصطناعي ويقيس أثرها."] },
    path: [
      { en: "Building AI agents", ar: "بناء الوكلاء الأذكياء", weeks: 4 },
      { en: "Evaluating AI quality", ar: "تقييم جودة الذكاء الاصطناعي", weeks: 3 },
      { en: "Data governance", ar: "حوكمة البيانات", weeks: 2 }
    ]
  },
  {
    id: "translator", unit: "comms", headcount: 8,
    en: "Arabic–English translator", ar: "مترجم عربي–إنجليزي",
    tasks: [
      { en: "Translate routine documents", ar: "ترجمة المستندات الروتينية", s: 45, c: "a",
        w: ["Machine translation with spot checks.", "ترجمة آلية مع تدقيق عيّني."] },
      { en: "Translate legal and official texts", ar: "ترجمة النصوص القانونية والرسمية", s: 25, c: "g",
        w: ["AI gives a first draft; the translator certifies it.", "يقدّم الذكاء الاصطناعي مسودة أولى ويعتمدها المترجم."] },
      { en: "Proofread documents", ar: "التدقيق اللغوي للمستندات", s: 15, c: "g",
        w: ["AI flags errors; the translator decides on style.", "يرصد الذكاء الاصطناعي الأخطاء ويقرر المترجم الأسلوب."] },
      { en: "Interpret in meetings", ar: "الترجمة الفورية في الاجتماعات", s: 15, c: "h",
        w: ["Live meetings need nuance and discretion.", "الاجتماعات المباشرة تحتاج إلى دقة وحسن تصرف."] }
    ],
    future: { en: "Language quality lead", ar: "قائد جودة اللغة",
      d: ["Maintains the Arabic terminology the AI uses.", "يحافظ على المصطلحات العربية التي يستخدمها الذكاء الاصطناعي."] },
    path: [
      { en: "Post-editing AI translation", ar: "التحرير اللاحق للترجمة الآلية", weeks: 2 },
      { en: "Terminology management", ar: "إدارة المصطلحات", weeks: 2 },
      { en: "Evaluating AI language quality", ar: "تقييم جودة اللغة في الذكاء الاصطناعي", weeks: 2 }
    ]
  },
  {
    id: "communications-officer", unit: "comms", headcount: 10,
    en: "Communications officer", ar: "موظف اتصال",
    tasks: [
      { en: "Draft press releases and posts", ar: "صياغة البيانات الصحفية والمنشورات", s: 30, c: "g",
        w: ["AI drafts; the officer sets the message and tone.", "يصوغ الذكاء الاصطناعي المسودة ويحدد الموظف الرسالة والأسلوب."] },
      { en: "Monitor media and social channels", ar: "رصد وسائل الإعلام وقنوات التواصل", s: 20, c: "a",
        w: ["Continuous automated monitoring.", "رصد آلي مستمر."] },
      { en: "Produce visuals and video", ar: "إنتاج المواد المرئية والفيديو", s: 20, c: "g",
        w: ["AI speeds up production; the officer approves.", "يسرّع الذكاء الاصطناعي الإنتاج ويعتمد الموظف."] },
      { en: "Manage media relations", ar: "إدارة العلاقات الإعلامية", s: 15, c: "h",
        w: ["Built on personal trust.", "تقوم على الثقة الشخصية."] },
      { en: "Handle crisis communication", ar: "إدارة الاتصال في الأزمات", s: 15, c: "h",
        w: ["High stakes and fast judgement.", "رهانات عالية وقرارات سريعة."] }
    ],
    future: { en: "Communications editor", ar: "محرر الاتصال",
      d: ["Plans campaigns and checks AI-drafted content before it goes out.", "يخطط الحملات ويراجع المحتوى الذي يصوغه الذكاء الاصطناعي قبل نشره."] },
    path: [
      { en: "Responsible AI content", ar: "المحتوى المسؤول بالذكاء الاصطناعي", weeks: 2 },
      { en: "Audience analytics", ar: "تحليل الجمهور", weeks: 2 },
      { en: "Crisis communication", ar: "الاتصال في الأزمات", weeks: 2 }
    ]
  },
  {
    id: "executive-assistant", unit: "leadership", headcount: 20,
    en: "Executive assistant", ar: "مساعد تنفيذي",
    tasks: [
      { en: "Manage calendars and meetings", ar: "إدارة المواعيد والاجتماعات", s: 30, c: "a",
        w: ["Scheduling assistants handle most of this.", "تتولى المساعدات الذكية معظم هذه المهمة."] },
      { en: "Draft correspondence", ar: "صياغة المراسلات", s: 25, c: "g",
        w: ["AI drafts; the assistant adjusts for the reader.", "يصوغ الذكاء الاصطناعي المراسلة ويعدّلها المساعد بحسب المتلقي."] },
      { en: "Prepare briefing packs", ar: "إعداد ملفات الإحاطة", s: 20, c: "g",
        w: ["AI gathers and summarises; the assistant curates.", "يجمع الذكاء الاصطناعي المعلومات ويلخصها ويختار المساعد ما يلزم."] },
      { en: "Take minutes and track actions", ar: "تدوين محاضر الاجتماعات ومتابعة المهام", s: 15, c: "a",
        w: ["Transcription and action extraction.", "تفريغ نصي واستخراج للمهام."] },
      { en: "Handle sensitive and VIP matters", ar: "التعامل مع المسائل الحساسة وكبار الشخصيات", s: 10, c: "h",
        w: ["Discretion and protocol.", "تكتّم ومراعاة للبروتوكول."] }
    ],
    future: { en: "Executive office coordinator", ar: "منسق المكتب التنفيذي",
      d: ["Runs the leader's agenda and prepares briefing notes.", "يدير أجندة القيادي ويُعدّ مذكرات الإحاطة."] },
    path: [
      { en: "AI productivity tools", ar: "أدوات الإنتاجية الذكية", weeks: 2 },
      { en: "Briefing and analysis", ar: "الإحاطة والتحليل", weeks: 3 },
      { en: "Stakeholder management", ar: "إدارة الجهات المعنية", weeks: 2 }
    ]
  },
  {
    id: "records-clerk", unit: "leadership", headcount: 18,
    en: "Records clerk", ar: "موظف السجلات",
    tasks: [
      { en: "Scan and index documents", ar: "مسح المستندات وفهرستها", s: 40, c: "a",
        w: ["AI classifies documents as they are scanned.", "يصنّف الذكاء الاصطناعي المستندات أثناء مسحها."] },
      { en: "Retrieve records on request", ar: "استرجاع السجلات عند الطلب", s: 25, c: "a",
        w: ["Search replaces manual retrieval.", "البحث الذكي يغني عن الاسترجاع اليدوي."] },
      { en: "Apply retention rules", ar: "تطبيق قواعد الاحتفاظ بالسجلات", s: 15, c: "g",
        w: ["AI proposes; the clerk confirms what is kept or destroyed.", "يقترح الذكاء الاصطناعي ويؤكد الموظف ما يُحفظ أو يُتلف."] },
      { en: "Handle confidential records", ar: "التعامل مع السجلات السرية", s: 20, c: "h",
        w: ["Access to confidential files stays controlled by people.", "يبقى الوصول إلى الملفات السرية تحت رقابة بشرية."] }
    ],
    future: { en: "Data steward", ar: "أمين بيانات",
      d: ["Makes sure the data AI uses is accurate and protected.", "يضمن دقة البيانات التي يستخدمها الذكاء الاصطناعي وحمايتها."] },
    path: [
      { en: "Data quality", ar: "جودة البيانات", weeks: 3 },
      { en: "Privacy and data protection law", ar: "الخصوصية وقانون حماية البيانات", weeks: 2 },
      { en: "Metadata and archives", ar: "البيانات الوصفية والأرشفة", weeks: 2 }
    ]
  },
  {
    id: "section-head", unit: "leadership", headcount: 30,
    en: "Section head", ar: "رئيس قسم",
    tasks: [
      { legal: true, en: "Approve team decisions and escalations", ar: "اعتماد قرارات الفريق والحالات المصعّدة", s: 25, c: "h",
        w: ["Accountability for decisions sits here.", "هنا تقع المسؤولية عن القرارات."] },
      { en: "Lead and develop staff", ar: "قيادة الموظفين وتطويرهم", s: 25, c: "h",
        w: ["People leadership stays human.", "القيادة تبقى إنسانية."] },
      { en: "Review performance dashboards", ar: "مراجعة لوحات الأداء", s: 15, c: "g",
        w: ["AI highlights what changed; the head decides what to do.", "يبرز الذكاء الاصطناعي ما تغيّر ويقرر رئيس القسم الإجراء."] },
      { en: "Write progress reports", ar: "كتابة تقارير الإنجاز", s: 15, c: "a",
        w: ["Generated from the dashboards.", "تُنشأ من لوحات الأداء."] },
      { en: "Plan resources and rosters", ar: "تخطيط الموارد وجداول العمل", s: 20, c: "g",
        w: ["AI proposes rosters; the head balances people's needs.", "يقترح الذكاء الاصطناعي الجداول ويوازن رئيس القسم احتياجات الموظفين."] }
    ],
    future: { en: "Service delivery lead", ar: "قائد تقديم الخدمات",
      d: ["Leads the team and sets the rules for how its AI tools are used.", "يقود الفريق ويضع قواعد استخدام أدوات الذكاء الاصطناعي فيه."] },
    path: [
      { en: "Leading hybrid teams", ar: "قيادة الفرق الهجينة", weeks: 3 },
      { en: "Overseeing AI performance", ar: "الإشراف على أداء الذكاء الاصطناعي", weeks: 2 },
      { en: "Leading change", ar: "قيادة التغيير", weeks: 2 }
    ]
  }
];

// One illustrative employee per role. Female personas carry feminine Arabic forms of the future role.
// Training starts in waves: customer services and licensing first (pilot), then the rest as adoption scales.
const WAVES = { customer: "2027-01-11", licensing: "2027-01-11", inspection: "2027-04-05", legal: "2027-04-05", corporate: "2027-04-05", tech: "2027-09-06", comms: "2027-09-06", leadership: "2027-09-06" };
const NEW_WORK_SHARES = [0.5, 0.3, 0.2];
const COMMITMENTS = [
  { en: "No compulsory exit.", ar: "لا إنهاء خدمة إلزامي." },
  { en: "Pay and grade kept through training.", ar: "يبقى الراتب والدرجة كما هما خلال التدريب." },
  { en: "Training in working hours, paid by the department.", ar: "التدريب خلال ساعات العمل وعلى نفقة الدائرة." }
];
const EMPLOYEES = [
  { roleId: "customer-happiness-officer", g: "f", years: 4, name: { en: "Mariam", ar: "مريم" }, title: { en: "Mariam, customer happiness officer", ar: "مريم، موظفة سعادة المتعاملين" }, nextAr: "أخصائية تجربة المتعاملين", nextDAr: "تتولى الحالات المعقدة وتشرف على وكيل الخدمة الذكي.",
    newWork: [{ en: "Handling complex and sensitive cases", ar: "معالجة الحالات المعقدة والحساسة" }, { en: "Supervising the AI service agent", ar: "الإشراف على وكيل الخدمة الذكي" }, { en: "Fixing recurring service problems", ar: "معالجة مشكلات الخدمة المتكررة" }],
    owns: { en: "She resolves every complaint and escalation herself.", ar: "تعالج بنفسها كل شكوى وكل حالة مصعّدة." } },
  { roleId: "call-centre-agent", g: "m", years: 3, name: { en: "Omar", ar: "عمر" }, title: { en: "Omar, call centre agent", ar: "عمر، موظف مركز الاتصال" },
    newWork: [{ en: "Reviewing AI conversations for accuracy", ar: "مراجعة محادثات الذكاء الاصطناعي للتحقق من دقتها" }, { en: "Updating the knowledge base", ar: "تحديث قاعدة المعرفة" }, { en: "Taking calls the AI hands over", ar: "تولّي المكالمات التي يحيلها الذكاء الاصطناعي" }],
    owns: { en: "He takes any call where a customer asks for a person.", ar: "يتولى أي مكالمة يطلب فيها المتعامل التحدث إلى موظف." } },
  { roleId: "licensing-officer", g: "f", years: 6, name: { en: "Fatima", ar: "فاطمة" }, title: { en: "Fatima, licensing officer", ar: "فاطمة، موظفة ترخيص" }, nextAr: "مديرة حالات الترخيص", nextDAr: "تتولى الحالات المعقدة من بدايتها إلى نهايتها وتعتمد توصيات الذكاء الاصطناعي.",
    newWork: [{ en: "Owning complex cases end to end", ar: "تولّي الحالات المعقدة من بدايتها إلى نهايتها" }, { en: "Reviewing AI recommendations before sign-off", ar: "مراجعة توصيات الذكاء الاصطناعي قبل اعتمادها" }, { en: "Coaching newer officers", ar: "توجيه الموظفين الجدد" }],
    owns: { en: "She signs off every licence decision.", ar: "تعتمد بنفسها كل قرار ترخيص." } },
  { roleId: "document-verification-clerk", g: "m", years: 8, name: { en: "Khalid", ar: "خالد" }, title: { en: "Khalid, document verification clerk", ar: "خالد، موظف التحقق من المستندات" },
    newWork: [{ en: "Investigating documents the AI flags", ar: "التحقيق في المستندات التي يرصدها الذكاء الاصطناعي" }, { en: "Building fraud case files", ar: "إعداد ملفات قضايا الاحتيال" }, { en: "Tuning the AI's fraud checks", ar: "تحسين فحوصات الاحتيال لدى الذكاء الاصطناعي" }],
    owns: { en: "He decides every suspected forgery case.", ar: "يبتّ بنفسه في كل حالة تزوير مشتبه بها." } },
  { roleId: "renewals-officer", g: "f", years: 5, name: { en: "Noora", ar: "نورة" }, title: { en: "Noora, renewals officer", ar: "نورة، موظفة التجديد" }, nextAr: "محللة مخاطر التجديد", nextDAr: "تراقب التجديدات الآلية وترصد أنماط المخاطر.",
    newWork: [{ en: "Monitoring automated renewals", ar: "مراقبة التجديدات الآلية" }, { en: "Spotting risk patterns across renewals", ar: "رصد أنماط المخاطر في التجديدات" }, { en: "Handling renewals with violations", ar: "معالجة التجديدات التي عليها مخالفات" }],
    owns: { en: "She decides every renewal with a violation or a change.", ar: "تبتّ بنفسها في كل تجديد عليه مخالفة أو تغيير." } },
  { roleId: "field-inspector", g: "m", years: 11, name: { en: "Saeed", ar: "سعيد" }, title: { en: "Saeed, field inspector", ar: "سعيد، مفتش ميداني" },
    newWork: [{ en: "More visits to high-risk sites", ar: "زيارات أكثر للمنشآت عالية الخطورة" }, { en: "Reviewing AI risk scores", ar: "مراجعة مؤشرات المخاطر الذكية" }, { en: "Coaching business owners on compliance", ar: "توجيه أصحاب المنشآت بشأن الامتثال" }],
    owns: { en: "He issues every violation and warning himself.", ar: "يصدر بنفسه كل مخالفة وكل إنذار." } },
  { roleId: "compliance-analyst", g: "f", years: 4, name: { en: "Hessa", ar: "حصة" }, title: { en: "Hessa, compliance analyst", ar: "حصة، محللة امتثال" }, nextAr: "محللة مخاطر الامتثال", nextDAr: "تراجع الحالات التي يرصدها الذكاء الاصطناعي وتعدّ تقارير عن اتجاهات المخاطر.",
    newWork: [{ en: "Reviewing cases AI monitoring flags", ar: "مراجعة الحالات التي يرصدها الذكاء الاصطناعي" }, { en: "Reporting on risk trends", ar: "إعداد تقارير عن اتجاهات المخاطر" }, { en: "Advising inspectors where to focus", ar: "توجيه المفتشين إلى أولويات التفتيش" }],
    owns: { en: "She decides which cases go to enforcement.", ar: "تقرر بنفسها الحالات التي تُحال إلى الإجراءات التنفيذية." } },
  { roleId: "legal-researcher", g: "m", years: 7, name: { en: "Ahmed", ar: "أحمد" }, title: { en: "Ahmed, legal researcher", ar: "أحمد، باحث قانوني" },
    newWork: [{ en: "Checking AI legal research", ar: "التحقق من البحوث القانونية التي يعدّها الذكاء الاصطناعي" }, { en: "Maintaining the legal knowledge base", ar: "إدارة قاعدة المعرفة القانونية" }, { en: "Signing off legal opinions", ar: "اعتماد الآراء القانونية" }],
    owns: { en: "He signs off every legal opinion.", ar: "يعتمد بنفسه كل رأي قانوني." } },
  { roleId: "policy-analyst", g: "f", years: 3, name: { en: "Latifa", ar: "لطيفة" }, title: { en: "Latifa, policy analyst", ar: "لطيفة، محللة سياسات" }, nextAr: "محللة أثر السياسات", nextDAr: "تختبر مسودات السياسات بنماذج الذكاء الاصطناعي قبل إطلاقها.",
    newWork: [{ en: "Testing draft policies with AI models", ar: "اختبار مسودات السياسات بنماذج الذكاء الاصطناعي" }, { en: "Consulting businesses on proposals", ar: "استشارة المنشآت بشأن المقترحات" }, { en: "Briefing leaders on options", ar: "إطلاع القيادات على الخيارات" }],
    owns: { en: "She writes every recommendation that goes to leadership.", ar: "تصوغ بنفسها كل توصية تُرفع إلى القيادة." } },
  { roleId: "procurement-officer", g: "m", years: 9, name: { en: "Rashid", ar: "راشد" }, title: { en: "Rashid, procurement officer", ar: "راشد، موظف المشتريات" },
    newWork: [{ en: "Negotiating high-value contracts", ar: "التفاوض على العقود عالية القيمة" }, { en: "Overseeing the procurement AI agent", ar: "الإشراف على وكيل المشتريات الذكي" }, { en: "Managing key suppliers", ar: "إدارة الموردين الرئيسيين" }],
    owns: { en: "He chooses the supplier in every tender.", ar: "يختار بنفسه المورد في كل مناقصة." } },
  { roleId: "accountant", g: "f", years: 6, name: { en: "Priya", ar: "بريا" }, title: { en: "Priya, accountant", ar: "بريا، محاسبة" }, nextAr: "محللة مالية", nextDAr: "تشرف على العمليات المالية المؤتمتة وتركز على التنبؤ.",
    newWork: [{ en: "Forecasting and budget analysis", ar: "التنبؤ وتحليل الميزانية" }, { en: "Checking automated finance runs", ar: "مراجعة العمليات المالية المؤتمتة" }, { en: "Advising section heads on spending", ar: "تقديم المشورة لرؤساء الأقسام بشأن الإنفاق" }],
    owns: { en: "She approves every payment exception.", ar: "تعتمد بنفسها كل استثناء في المدفوعات." } },
  { roleId: "hr-officer", g: "f", years: 10, name: { en: "Amna", ar: "آمنة" }, title: { en: "Amna, HR officer", ar: "آمنة، موظفة موارد بشرية" }, nextAr: "مستشارة انتقال القوى العاملة", nextDAr: "ترشد الزملاء إلى أدوارهم الجديدة.",
    newWork: [{ en: "Coaching colleagues into new roles", ar: "إرشاد الزملاء إلى أدوارهم الجديدة" }, { en: "Planning skills across the department", ar: "تخطيط المهارات على مستوى الدائرة" }, { en: "Supporting managers through the change", ar: "دعم المديرين خلال مرحلة التغيير" }],
    owns: { en: "She handles every employee relations case herself.", ar: "تتولى بنفسها كل قضية من قضايا علاقات الموظفين." } },
  { roleId: "recruitment-specialist", g: "m", years: 5, name: { en: "Yousef", ar: "يوسف" }, title: { en: "Yousef, recruitment specialist", ar: "يوسف، أخصائي التوظيف" },
    newWork: [{ en: "Matching staff to new roles inside the department", ar: "مواءمة الموظفين مع الأدوار الجديدة داخل الدائرة" }, { en: "Checking AI screening for fairness", ar: "التحقق من عدالة الفرز الآلي" }, { en: "Interviewing for potential", ar: "إجراء المقابلات لاكتشاف الإمكانات" }],
    owns: { en: "He makes every hiring decision.", ar: "يتخذ بنفسه كل قرار توظيف." } },
  { roleId: "training-coordinator", g: "f", years: 4, name: { en: "Shamma", ar: "شما" }, title: { en: "Shamma, training coordinator", ar: "شما، منسقة تدريب" }, nextAr: "مصممة تعلّم بالذكاء الاصطناعي", nextDAr: "تصمم برامج إعادة التأهيل لكل دور جديد.",
    newWork: [{ en: "Designing reskilling programmes", ar: "تصميم برامج إعادة التأهيل" }, { en: "Setting up AI tutoring", ar: "إعداد أدوات التدريس الذكية" }, { en: "Measuring what training changes", ar: "قياس أثر التدريب" }],
    owns: { en: "She signs off every training plan.", ar: "تعتمد بنفسها كل خطة تدريب." } },
  { roleId: "it-support-technician", g: "m", years: 6, name: { en: "Arjun", ar: "أرجون" }, title: { en: "Arjun, IT support technician", ar: "أرجون، فني دعم تقني" },
    newWork: [{ en: "Monitoring AI agents", ar: "مراقبة الوكلاء الأذكياء" }, { en: "Responding to AI incidents", ar: "الاستجابة لأعطال الذكاء الاصطناعي" }, { en: "Managing system access", ar: "إدارة صلاحيات الوصول إلى الأنظمة" }],
    owns: { en: "He can switch off any AI agent that misbehaves.", ar: "يستطيع إيقاف أي وكيل ذكي يخرج عن المسار." } },
  { roleId: "data-analyst", g: "f", years: 3, name: { en: "Reem", ar: "ريم" }, title: { en: "Reem, data analyst", ar: "ريم، محللة بيانات" }, nextAr: "محللة منتجات الذكاء الاصطناعي", nextDAr: "تصمم استخدامات جديدة للذكاء الاصطناعي وتقيس أثرها.",
    newWork: [{ en: "Building new AI uses with teams", ar: "بناء استخدامات جديدة للذكاء الاصطناعي مع الفرق" }, { en: "Testing AI quality", ar: "اختبار جودة الذكاء الاصطناعي" }, { en: "Measuring impact for leadership", ar: "قياس الأثر للقيادة" }],
    owns: { en: "She tests every AI tool before it goes live.", ar: "تختبر بنفسها كل أداة ذكاء اصطناعي قبل إطلاقها." } },
  { roleId: "translator", g: "m", years: 12, name: { en: "Hamdan", ar: "حمدان" }, title: { en: "Hamdan, Arabic–English translator", ar: "حمدان، مترجم عربي–إنجليزي" },
    newWork: [{ en: "Editing AI translations", ar: "تحرير الترجمات الآلية" }, { en: "Maintaining Arabic terminology", ar: "إدارة المصطلحات العربية" }, { en: "Testing the AI's Arabic", ar: "اختبار جودة اللغة العربية لدى الذكاء الاصطناعي" }],
    owns: { en: "He approves every legal and official translation.", ar: "يعتمد بنفسه كل ترجمة قانونية أو رسمية." } },
  { roleId: "communications-officer", g: "f", years: 4, name: { en: "Dana", ar: "دانة" }, title: { en: "Dana, communications officer", ar: "دانة، موظفة اتصال" }, nextAr: "محررة الاتصال", nextDAr: "تخطط الحملات وتراجع المحتوى الذي يصوغه الذكاء الاصطناعي قبل نشره.",
    newWork: [{ en: "Planning campaigns", ar: "تخطيط الحملات" }, { en: "Checking AI-drafted content", ar: "مراجعة المحتوى الذي يصوغه الذكاء الاصطناعي" }, { en: "Reading audience data", ar: "تحليل بيانات الجمهور" }],
    owns: { en: "She approves everything published in the department's name.", ar: "تعتمد بنفسها كل ما يُنشر باسم الدائرة." } },
  { roleId: "executive-assistant", g: "f", years: 8, name: { en: "Maitha", ar: "ميثاء" }, title: { en: "Maitha, executive assistant", ar: "ميثاء، مساعدة تنفيذية" }, nextAr: "منسقة المكتب التنفيذي", nextDAr: "تدير أجندة القيادي وتُعدّ مذكرات الإحاطة.",
    newWork: [{ en: "Preparing briefing notes", ar: "إعداد مذكرات الإحاطة" }, { en: "Following up on decisions", ar: "متابعة تنفيذ القرارات" }, { en: "Managing key stakeholders", ar: "إدارة العلاقات مع الجهات الرئيسية" }],
    owns: { en: "She decides what reaches the leader's desk.", ar: "تقرر بنفسها ما يُرفع إلى القيادي." } },
  { roleId: "records-clerk", g: "m", years: 14, name: { en: "Salem", ar: "سالم" }, title: { en: "Salem, records clerk", ar: "سالم، موظف السجلات" },
    newWork: [{ en: "Checking data quality", ar: "التحقق من جودة البيانات" }, { en: "Handling data access requests", ar: "معالجة طلبات الوصول إلى البيانات" }, { en: "Managing archive rules", ar: "إدارة قواعد الأرشفة" }],
    owns: { en: "He approves every release of personal data.", ar: "يعتمد بنفسه كل إفصاح عن بيانات شخصية." } },
  { roleId: "section-head", g: "m", years: 9, name: { en: "Abdulla", ar: "عبدالله" }, title: { en: "Abdulla, section head", ar: "عبدالله، رئيس قسم" },
    newWork: [{ en: "Coaching the team through the change", ar: "توجيه الفريق خلال مرحلة التغيير" }, { en: "Reviewing how the team's AI tools perform", ar: "مراجعة أداء أدوات الذكاء الاصطناعي في الفريق" }, { en: "Planning services with other sections", ar: "تخطيط الخدمات مع الأقسام الأخرى" }],
    owns: { en: "He approves every escalated decision.", ar: "يعتمد بنفسه كل قرار مصعّد." } }
];
