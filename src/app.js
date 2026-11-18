const I18N = {
  en: {
    entity: "Department of Business Services",
    guardTitle: "Needs a human decision.",
    guardBody: "This task has legal effect on a person or business. Under the UAE AI Charter's human oversight principle and data protection law, a person makes the final call, so AI can only draft or recommend.",
    guardLocked: "Locked: needs a human decision",
    bizTitle: "The business case",
    bizIntro: "Freed capacity becomes money in two ways: leavers who are not replaced, and new roles filled from inside instead of by new hires.",
    bizCash: "Savings a year", bizCashSub: "{n}: unreplaced leavers and internal moves",
    bizReinvest: "Capacity reinvested in services", bizReinvestSub: "kept as better service",
    bizAi: "AI cost a year",
    bizReskill: "Reskilling, one-off", bizReskillSub: "{w} person-weeks of training",
    bizNet: "Net benefit a year",
    bizPayback: "Payback on reskilling",
    bizNever: "Not within three years",
    bizInputs: "Your assumptions",
    inCost: "Cost per employee a year (AED)",
    inAi: "AI cost a year (AED)",
    inWeek: "Training cost per person-week (AED)",
    bizNote: "Savings build up over about three years as people leave, and payback allows for that. AI costs start in month one.",
    tourStart: "Guided demo",
    tourStep: "Step {i} of {n}",
    tourNext: "Next", tourBack: "Back", tourEnd: "End demo", tourFinish: "Finish",
    tour1: "Each role is split into the tasks of a typical week. For a licensing officer, AI could free about {h} of 40 hours.",
    tour2: "Managers can override any decision. Here, advising investors stays fully human, and the numbers update instantly.",
    tour3: "Some decisions can't be automated. Approving a licence has legal effect, so the tool keeps a person in charge.",
    tour4: "Fatima is one of {n} licensing officers. She trains from {start} and becomes a licensing case manager in {month}, on the same pay and grade.",
    tour5: "Across the department, AI frees the equivalent of {f} full-time staff at the scale stage, with no compulsory exits.",
    tour6: "Freed capacity has a plan: new roles, better services and natural attrition.",
    tour7: "Not replacing leavers and filling new roles from inside pays back the reskilling in about {m}.",
    tour8: "Any job description can be analysed the same way. Press Analyse role to try it live.",
    product: "Role Redesign Studio",
    badge: "Concept prototype",
    tabRoles: "Roles",
    tabDept: "Department",
    tabAnalyse: "Analyse a role",
    tabEmployee: "Employee view",
    empPick: "Employee",
    empMeta: "{n} in the department",
    empPersona_f: "Illustrative employee", empPersona_m: "Illustrative employee",
    empLead_f: "AI takes {h} of routine work off her week. She trains for {w} from {start}, then starts as {next} on {date}.",
    empLead_m: "AI takes {h} of routine work off his week. He trains for {w} from {start}, then starts as {next} on {date}.",
    empWeekTitle_f: "Her week, today and after", empWeekTitle_m: "His week, today and after",
    empToday: "Today",
    empAfter: "From {date}",
    empNew: "New",
    empTotal: "Total",
    empTrainTitle_f: "Her training", empTrainTitle_m: "His training",
    empRoleStarts: "New role starts",
    empNextKicker_f: "Her next role", empNextKicker_m: "His next role",
    empCommitTitle: "What the department commits to",
    seeEmployee: "See {name}'s week",
    sideHide: "Hide role list",
    sideShow: "Show role list",
    switchLang: "العربية",
    themeLight: "Light",
    themeDark: "Dark",
    themeToggle: "Switch colour theme",
    search: "Search roles",
    noMatch: "No role matches that search.",
    staff: "{n} staff",
    yourAnalysis: "Your analysis",
    findingHead: "At full adoption, AI frees about {h} of each person's 40 weekly hours.",
    findingNone: "In this design, every task stays with people.",
    weekTitle: "A typical 40-hour week",
    weekHint: "Hover to find a task",
    cat_a: "Automate", cat_g: "Augment", cat_h: "Keep human-led",
    tier_a: "AI acts, staff spot-check",
    tier_g: "AI drafts, a person approves",
    tier_h: "Person only",
    tasksTitle: "Tasks",
    thTask: "Task", thTime: "Time", thCat: "Decision", thOversight: "Human oversight",
    hours: "{h} h a week",
    changed: "Changed from {c}",
    resetAll: "Reset changes",
    futureKicker: "Future role",
    fromTo: "From {a} to {b}",
    pathTitle: "Reskilling path",
    weeks: "{n} weeks",
    totalWeeks: "Total",
    download: "Download report",
    downloaded: "Report saved.",
    downloadDeclined: "Download cancelled.",
    downloadUnavailable: "Downloads aren't available in this view.",
    deptTitle: "The department at {p}% adoption",
    deptFinding: "AI frees the equivalent of {f} full-time staff. Each has a planned next step, and there are no compulsory exits.",
    statStaff: "Staff in scope", statStaffSub: "{r} roles",
    statAssist: "Work AI can assist", statAssistSub: "automate or augment",
    statFreed: "Capacity freed", statFreedSub: "full-time equivalents",
    statExits: "Compulsory exits", statExitsSub: "at every adoption level",
    adoption: "Adoption",
    phasePilot: "Pilot", phaseScale: "Scale", phaseEmbed: "Embed",
    fpTitle: "Where the time goes",
    fpRole: "Role", fpStaff: "Staff", fpMix: "Share of the week", fpFte: "FTE freed",
    peopleTitle: "Where the freed capacity goes",
    flowNew: "New roles", flowNewSub: "Reskilled staff move into roles such as case manager or AI quality reviewer.",
    flowService: "Better services", flowServiceSub: "Longer hours, proactive outreach, faster complex cases.",
    flowAttrition: "Natural attrition", flowAttritionSub: "Leavers are not replaced. Nobody is let go.",
    sliderNew: "Moved into new roles", sliderService: "Reinvested in services",
    attritionOk: "Natural attrition can absorb up to {cap} FTE over three years, so {n} FTE fits.",
    attritionWarn: "Natural attrition can absorb only about {cap} FTE over three years. Move more capacity into new roles or services.",
    assumptionsTitle: "Assumptions",
    assume1: "Automated tasks: AI takes on 80% of the time.",
    assume2: "Augmented tasks: AI saves 35% of the time.",
    assume3: "Human-led tasks: no time saved.",
    assume4: "Natural attrition: 6% a year.",
    assume5: "40-hour week; illustrative headcounts.",
    fte: "{n} FTE",
    analyseTitle: "Analyse a role",
    analyseIntro: "Paste a job description. The tool splits the role into tasks, sorts each one, and suggests a future role with a reskilling path.",
    jdPlaceholder: "Paste a job description here",
    useExample: "Use an example",
    analyse: "Analyse role",
    analysing: "Reading the job description and sorting tasks…",
    privacy: "Paste job descriptions only. Don't include names, ID numbers or other personal details. The analysis is a starting point for people to review, not a decision.",
    engineBuiltIn: "Runs on Claude Sonnet 5.5. You'll be asked to allow it the first time.",
    engineApi: "Runs on the department's own AI service.",
    engineNone: "Live analysis isn't available here. The 21 analysed roles still work.",
    errorEmpty: "Paste a job description first.",
    errorShort: "That's too short to analyse. Paste the full job description.",
    errorFailed: "The analysis didn't come back in the expected format. Try again.",
    errorDenied: "Live analysis needs permission to use Claude. Allow it and try again.",
    errorBusy: "Too many requests just now. Wait a moment and try again.",
    addToDept: "Add to department view",
    added: "Added to the role list and department totals.",
    footer: "Fictional entity with illustrative figures. Concept prototype for the NYUAD × KPMG Case Competition 2026.",
    reportTitle: "Role redesign report",
    reportGenerated: "Generated by the Role Redesign Studio concept prototype. Figures are illustrative.",
    exampleJD: `Job title: Business activity classification officer

Purpose: Make sure every trade licence carries the correct business activity codes, so that licences, inspections and statistics are accurate.

Main duties:
- Review the activities listed on new and amended licence applications and assign the correct codes from the national classification.
- Check whether an activity needs approval from another authority (for example health, education or civil defence) and route the request.
- Answer questions from applicants and typing centres about which activity to choose.
- Investigate licences with unusual or conflicting activity combinations and recommend corrective action.
- Keep the activity guide up to date when new codes are introduced and brief colleagues on the changes.
- Prepare a monthly report on new activities, rejected codes and processing times.

Requirements: Bachelor's degree, two years' experience in licensing or economic regulation, strong Arabic and English.`
  },
  ar: {
    entity: "دائرة خدمات الأعمال",
    guardTitle: "يتطلب قرارًا بشريًا.",
    guardBody: "لهذه المهمة أثر قانوني على شخص أو منشأة. ووفقًا لمبدأ الرقابة البشرية في ميثاق الإمارات للذكاء الاصطناعي وقانون حماية البيانات، يعود القرار النهائي إلى الموظف، ويقتصر دور الذكاء الاصطناعي على الاقتراح أو التوصية.",
    guardLocked: "مقفل: يتطلب قرارًا بشريًا",
    bizTitle: "دراسة الجدوى",
    bizIntro: "تتحول الطاقة المحرَّرة إلى قيمة مالية بطريقتين: عدم تعويض المغادرين، وشغل الأدوار الجديدة من داخل الدائرة بدلًا من التوظيف الخارجي.",
    bizCash: "الوفورات سنويًا", bizCashSub: "{n}: مغادرون لا يُعوَّضون وانتقالات داخلية",
    bizReinvest: "الطاقة المعاد استثمارها في الخدمات", bizReinvestSub: "تتحول إلى خدمة أفضل",
    bizAi: "تكلفة الذكاء الاصطناعي سنويًا",
    bizReskill: "إعادة التأهيل، لمرة واحدة", bizReskillSub: "{w} من التدريب",
    bizNet: "صافي العائد سنويًا",
    bizPayback: "استرداد تكلفة إعادة التأهيل",
    bizNever: "ليس خلال ثلاث سنوات",
    bizInputs: "افتراضاتك",
    inCost: "تكلفة الموظف سنويًا (درهم)",
    inAi: "تكلفة الذكاء الاصطناعي سنويًا (درهم)",
    inWeek: "تكلفة التدريب لكل موظف في الأسبوع (درهم)",
    bizNote: "تتراكم الوفورات خلال نحو ثلاث سنوات مع مغادرة الموظفين، ويراعي الاسترداد ذلك. وتبدأ تكلفة الذكاء الاصطناعي من الشهر الأول.",
    tourStart: "عرض توضيحي",
    tourStep: "الخطوة {i} من {n}",
    tourNext: "التالي", tourBack: "السابق", tourEnd: "إنهاء العرض", tourFinish: "إنهاء",
    tour1: "يُقسَّم كل دور إلى مهام أسبوع العمل. لموظف الترخيص، يمكن للذكاء الاصطناعي توفير نحو {h} من أصل 40 ساعة.",
    tour2: "يمكن للمديرين تعديل أي قرار. هنا تبقى مشورة المستثمرين بشرية بالكامل، وتتحدث الأرقام فورًا.",
    tour3: "بعض القرارات لا تُؤتمت. لاعتماد الرخصة أثر قانوني، لذا تُبقي الأداة القرار بيد موظف.",
    tour4: "فاطمة واحدة من {n} في الترخيص. تتدرب بدءًا من {start}، ثم تصبح مديرة حالات ترخيص في {month} براتبها ودرجتها نفسيهما.",
    tour5: "على مستوى الدائرة، يوفّر الذكاء الاصطناعي ما يعادل {f} بدوام كامل في مرحلة التوسع، دون إنهاء خدمة إلزامي.",
    tour6: "للطاقة المحرَّرة خطة: أدوار جديدة، وخدمات أفضل، وتسرب طبيعي.",
    tour7: "عدم تعويض المغادرين وشغل الأدوار الجديدة من الداخل يغطيان تكلفة إعادة التأهيل خلال نحو {m}.",
    tour8: "يمكن تحليل أي وصف وظيفي بالطريقة نفسها. اضغط «حلّل الدور» لتجربة ذلك مباشرة.",
    product: "استوديو إعادة تصميم الأدوار",
    badge: "نموذج أولي",
    tabRoles: "الأدوار",
    tabDept: "الدائرة",
    tabAnalyse: "تحليل دور جديد",
    tabEmployee: "منظور الموظف",
    empPick: "الموظف",
    empMeta: "{n} في الدائرة",
    empPersona_f: "موظفة افتراضية", empPersona_m: "موظف افتراضي",
    empLead_f: "يتولى الذكاء الاصطناعي {h} من العمل الروتيني في أسبوعها. تتدرب {w} بدءًا من {start}، ثم تبدأ عملها {next} في {date}.",
    empLead_m: "يتولى الذكاء الاصطناعي {h} من العمل الروتيني في أسبوعه. يتدرب {w} بدءًا من {start}، ثم يبدأ عمله {next} في {date}.",
    empWeekTitle_f: "أسبوعها اليوم وبعد إعادة التصميم", empWeekTitle_m: "أسبوعه اليوم وبعد إعادة التصميم",
    empToday: "اليوم",
    empAfter: "من {date}",
    empNew: "جديد",
    empTotal: "المجموع",
    empTrainTitle_f: "تدريبها", empTrainTitle_m: "تدريبه",
    empRoleStarts: "بداية الدور الجديد",
    empNextKicker_f: "دورها التالي", empNextKicker_m: "دوره التالي",
    empCommitTitle: "التزامات الدائرة",
    seeEmployee: "شاهد أسبوع {name}",
    sideHide: "إخفاء قائمة الأدوار",
    sideShow: "إظهار قائمة الأدوار",
    switchLang: "English",
    themeLight: "فاتح",
    themeDark: "داكن",
    themeToggle: "تبديل نمط الألوان",
    search: "ابحث عن دور",
    noMatch: "لا يوجد دور مطابق لهذا البحث.",
    staff: "{n} موظفًا",
    yourAnalysis: "تحليلك",
    findingHead: "عند التبني الكامل، يوفّر الذكاء الاصطناعي نحو {h} من أصل 40 ساعة أسبوعيًا لكل موظف.",
    findingNone: "في هذا التصميم، تبقى جميع المهام بيد الموظفين.",
    weekTitle: "أسبوع عمل نموذجي من 40 ساعة",
    weekHint: "مرّر المؤشر لمعرفة المهمة",
    cat_a: "أتمتة", cat_g: "تعزيز", cat_h: "بقيادة بشرية",
    tier_a: "ينفّذ الذكاء الاصطناعي بتدقيق عيّني",
    tier_g: "يقترح الذكاء الاصطناعي ويعتمد الموظف",
    tier_h: "للموظف فقط",
    tasksTitle: "المهام",
    thTask: "المهمة", thTime: "الوقت", thCat: "القرار", thOversight: "الرقابة البشرية",
    hours: "{h} ساعة أسبوعيًا",
    changed: "معدّلة من «{c}»",
    resetAll: "إلغاء التعديلات",
    futureKicker: "الدور المستقبلي",
    fromTo: "من {a} إلى {b}",
    pathTitle: "مسار إعادة التأهيل",
    weeks: "{n} أسابيع",
    totalWeeks: "المجموع",
    download: "تنزيل التقرير",
    downloaded: "تم حفظ التقرير.",
    downloadDeclined: "أُلغي التنزيل.",
    downloadUnavailable: "التنزيل غير متاح في هذه الواجهة.",
    deptTitle: "الدائرة عند تبنٍّ بنسبة {p}%",
    deptFinding: "يوفّر الذكاء الاصطناعي ما يعادل {f} موظفًا بدوام كامل، ولكل منهم خطوة تالية مخططة، دون أي إنهاء خدمة إلزامي.",
    statStaff: "الموظفون المشمولون", statStaffSub: "{r} دورًا",
    statAssist: "العمل الذي يدعمه الذكاء الاصطناعي", statAssistSub: "أتمتة أو تعزيز",
    statFreed: "الطاقة المحرَّرة", statFreedSub: "بدوام كامل",
    statExits: "إنهاء الخدمة الإلزامي", statExitsSub: "عند أي نسبة تبنٍّ",
    adoption: "نسبة التبني",
    phasePilot: "التجربة", phaseScale: "التوسع", phaseEmbed: "الترسيخ",
    fpTitle: "أين يذهب الوقت",
    fpRole: "الدور", fpStaff: "الموظفون", fpMix: "توزيع الأسبوع", fpFte: "الطاقة المحرَّرة",
    peopleTitle: "أين تذهب الطاقة المحرَّرة",
    flowNew: "أدوار جديدة", flowNewSub: "ينتقل الموظفون بعد إعادة تأهيلهم إلى أدوار مثل مدير الحالات أو مراجع جودة الذكاء الاصطناعي.",
    flowService: "خدمات أفضل", flowServiceSub: "ساعات أطول، وتواصل استباقي، وحالات معقدة أسرع.",
    flowAttrition: "التسرب الطبيعي", flowAttritionSub: "لا يُعوَّض المغادرون، ولا يُستغنى عن أحد.",
    sliderNew: "الانتقال إلى أدوار جديدة", sliderService: "إعادة الاستثمار في الخدمات",
    attritionOk: "يمكن للتسرب الطبيعي استيعاب ما يصل إلى {cap} موظفًا خلال ثلاث سنوات، فيتسع لـ {n}.",
    attritionWarn: "لا يستوعب التسرب الطبيعي سوى نحو {cap} موظفًا خلال ثلاث سنوات. وجّه طاقة أكبر إلى الأدوار الجديدة أو الخدمات.",
    assumptionsTitle: "الافتراضات",
    assume1: "المهام المؤتمتة: يتولى الذكاء الاصطناعي 80% من وقتها.",
    assume2: "المهام المعزَّزة: يوفّر الذكاء الاصطناعي 35% من وقتها.",
    assume3: "المهام البشرية: لا توفير في الوقت.",
    assume4: "تسرب طبيعي: 6% سنويًا.",
    assume5: "أسبوع من 40 ساعة، وأعداد توضيحية.",
    fte: "{n} موظفًا",
    analyseTitle: "تحليل دور جديد",
    analyseIntro: "الصق وصفًا وظيفيًا، وستقسّم الأداة الدور إلى مهام وتصنّف كل مهمة، ثم تقترح دورًا مستقبليًا ومسارًا لإعادة التأهيل.",
    jdPlaceholder: "الصق الوصف الوظيفي هنا",
    useExample: "استخدم مثالًا",
    analyse: "حلّل الدور",
    analysing: "جارٍ قراءة الوصف الوظيفي وتصنيف المهام…",
    privacy: "الصق الأوصاف الوظيفية فقط، ولا تضمّنها أسماء أو أرقام هوية أو أي بيانات شخصية. التحليل نقطة انطلاق يراجعها الموظفون، وليس قرارًا نهائيًا.",
    engineBuiltIn: "يعمل عبر Claude Sonnet 5.5، وسيُطلب منك السماح بذلك في المرة الأولى.",
    engineApi: "يعمل عبر خدمة الذكاء الاصطناعي الخاصة بالدائرة.",
    engineNone: "التحليل المباشر غير متاح هنا، لكن الأدوار الـ 21 المحللة تعمل.",
    errorEmpty: "الصق وصفًا وظيفيًا أولًا.",
    errorShort: "النص قصير جدًا للتحليل. الصق الوصف الوظيفي كاملًا.",
    errorFailed: "لم يصل التحليل بالصيغة المتوقعة. حاول مرة أخرى.",
    errorDenied: "يحتاج التحليل المباشر إلى إذن باستخدام Claude. اسمح بذلك ثم حاول مجددًا.",
    errorBusy: "عدد الطلبات كبير حاليًا. انتظر قليلًا ثم حاول مجددًا.",
    addToDept: "أضِف إلى عرض الدائرة",
    added: "أُضيف الدور إلى القائمة وإلى إجماليات الدائرة.",
    footer: "جهة افتراضية بأرقام توضيحية. نموذج أولي لمسابقة دراسة الحالة بين جامعة نيويورك أبوظبي وKPMG لعام 2026.",
    reportTitle: "تقرير إعادة تصميم الدور",
    reportGenerated: "أُعدّ بواسطة النموذج الأولي لاستوديو إعادة تصميم الأدوار. الأرقام توضيحية.",
    exampleJD: `المسمى الوظيفي: موظف تصنيف الأنشطة التجارية

الغرض: التأكد من أن كل رخصة تجارية تحمل رموز الأنشطة الصحيحة، لضمان دقة الرخص وعمليات التفتيش والإحصاءات.

المهام الرئيسية:
- مراجعة الأنشطة الواردة في طلبات الترخيص الجديدة والمعدّلة وتحديد الرموز الصحيحة وفق التصنيف الوطني.
- التحقق مما إذا كان النشاط يتطلب موافقة جهة أخرى (مثل الصحة أو التعليم أو الدفاع المدني) وإحالة الطلب إليها.
- الرد على استفسارات المتقدمين ومراكز الطباعة حول النشاط المناسب.
- التحقيق في الرخص التي تتضمن أنشطة غير اعتيادية أو متعارضة والتوصية بالإجراء التصحيحي.
- تحديث دليل الأنشطة عند اعتماد رموز جديدة وإحاطة الزملاء بالتغييرات.
- إعداد تقرير شهري عن الأنشطة الجديدة والرموز المرفوضة ومدد المعالجة.

المتطلبات: درجة البكالوريوس، وخبرة لا تقل عن سنتين في الترخيص أو التنظيم الاقتصادي، وإتقان اللغتين العربية والإنجليزية.`
  }
};

const REDUCTION = { a: 0.8, g: 0.35, h: 0 };
const ATTRITION_RATE = 0.06;
const WEEK = 40;
const CONFIG = window.RRS_CONFIG || {};
const API_URL = CONFIG.apiUrl || "";

const state = {
  lang: "en",
  theme: "light",
  view: "roles",
  roleId: "licensing-officer",
  query: "",
  overrides: {},
  hot: null,
  adoption: 60,
  shareNew: 45,
  shareService: 30,
  custom: [],
  jd: "",
  analysing: false,
  analysis: null,
  analysisAdded: false,
  error: "",
  toast: "",
  guard: null,
  costFte: 300000,
  aiCost: 6000000,
  weekCost: 2000,
  tour: null,
  sidebar: true,
  empRole: "licensing-officer"
};

let sampleApi = null;
let downloadsApi = null;
let engineReady = false;

function store(key, value) { try { localStorage.setItem("rrs-" + key, value); } catch (e) {} }
function recall(key) { try { return localStorage.getItem("rrs-" + key); } catch (e) { return null; } }

function t(key, vars) {
  let s = (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  if (vars) for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
  return s;
}
function esc(v) {
  return String(v == null ? "" : v).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}
function L(obj) { return state.lang === "ar" ? (obj.ar || obj.en) : (obj.en || obj.ar); }
function why(task) { return state.lang === "ar" ? task.w[1] : task.w[0]; }
function fmt(n, d) { return Number(n).toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
function fmtHours(h) { return Number.isInteger(h) ? fmt(h) : fmt(h, 1); }


// Arabic counted nouns change form with the number (1, 2, 3–10, 11+).
const AR_FORMS = {
  staff: ["موظف واحد", "موظفان", "موظفين", "موظفًا"],
  hours: ["ساعة واحدة", "ساعتان", "ساعات", "ساعة"],
  weeks: ["أسبوع واحد", "أسبوعان", "أسابيع", "أسبوعًا"],
  months: ["شهر واحد", "شهران", "أشهر", "شهرًا"],
  years: ["سنة واحدة", "سنتان", "سنوات", "سنة"]
};
function arCount(n, kind) {
  const f = AR_FORMS[kind];
  const v = Number(n);
  const shown = Number.isInteger(v) ? fmt(v) : fmt(v, 1);
  if (!Number.isInteger(v)) return `${shown} ${f[3]}`;
  if (v === 1) return f[0];
  if (v === 2) return f[1];
  if (v >= 3 && v <= 10) return `${shown} ${f[2]}`;
  return `${shown} ${f[3]}`;
}
function staffText(n) { return state.lang === "ar" ? arCount(n, "staff") : t("staff", { n: fmt(n) }); }
function fteText(n) { const r = Math.round(n); return state.lang === "ar" ? arCount(r, "staff") : t("fte", { n: fmt(r) }); }
function weeksText(n) { return state.lang === "ar" ? arCount(n, "weeks") : t("weeks", { n }); }
function monthsText(n) { return state.lang === "ar" ? arCount(n, "months") : (n === 1 ? "1 month" : `${fmt(n)} months`); }
function moneyText(v) {
  const m = v / 1e6;
  if (state.lang === "ar") return m >= 1 ? `${fmt(m, 1)} مليون درهم` : `${fmt(v)} درهم`;
  return m >= 1 ? `AED ${fmt(m, 1)}M` : `AED ${fmt(v)}`;
}
function hoursText(h) { return state.lang === "ar" ? `${arCount(h, "hours")} أسبوعيًا` : t("hours", { h: fmtHours(h) }); }

function findingText(h, html) {
  const wrap = v => html ? `<strong class="num">${v}</strong>` : v;
  if (state.lang === "ar") {
    const words = arCount(h, "hours");
    const num = Number.isInteger(h) ? fmt(h) : fmt(h, 1);
    const phrase = words.startsWith(num) ? wrap(num) + words.slice(num.length) : wrap(words);
    return t("findingHead", { h: phrase });
  }
  return t("findingHead", { h: wrap(fmtHours(h)) });
}
function allRoles() { return ROLES.concat(state.custom); }
function findRole(id) { return allRoles().find(r => r.id === id) || (state.analysis && state.analysis.id === id ? state.analysis : null); }
function catOf(role, i) {
  const o = state.overrides[role.id];
  return o && o[i] ? o[i] : role.tasks[i].c;
}
function roleStats(role) {
  const shares = { a: 0, g: 0, h: 0 };
  let freed = 0;
  role.tasks.forEach((task, i) => {
    const c = catOf(role, i);
    shares[c] += task.s;
    freed += (task.s / 100) * REDUCTION[c];
  });
  return { shares, freed };
}
function hasOverrides(role) { return state.overrides[role.id] && Object.keys(state.overrides[role.id]).length > 0; }

const ICONS = {
  panel: '<svg class="panel-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M9.5 4.5v15M15.5 10l-2 2 2 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  lockSmall: '<svg class="lock-i" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5.5v13l10-6.5z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  download: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>',
  mark: '<svg class="brand-mark" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="var(--gold)"/><rect x="7" y="9" width="18" height="3.5" rx="1.75" fill="var(--bg)"/><rect x="7" y="14.25" width="12" height="3.5" rx="1.75" fill="var(--bg)"/><rect x="7" y="19.5" width="7" height="3.5" rx="1.75" fill="var(--bg)"/></svg>'
};

function renderTopbar() {
  const tabs = [["roles", "tabRoles"], ["employee", "tabEmployee"], ["dept", "tabDept"], ["analyse", "tabAnalyse"]];
  const themeIcon = state.theme === "dark" ? ICONS.sun : ICONS.moon;
  const themeLabel = state.theme === "dark" ? t("themeLight") : t("themeDark");
  return `<header class="topbar">
    <div class="brand">${ICONS.mark}<div class="brand-text"><span class="brand-entity">${t("entity")}</span><span class="brand-name">${t("product")}<span class="badge aegov-badge">${t("badge")}</span></span></div></div>
    <nav class="tabs aegov-tab tab-pills tab-sm" aria-label="${t("product")}"><div class="tab-items">${tabs.map(([v, k]) => `<button class="tab-link${state.view === v ? " tab-active" : ""}" data-action="view" data-view="${v}" ${state.view === v ? 'aria-current="page"' : ""}>${t(k)}</button>`).join("")}</div></nav>
    <div class="tools">
      <button class="tool-btn aegov-btn btn-sm${state.tour !== null ? "" : " btn-soft"}" data-action="tour-start" ${state.tour !== null ? 'aria-pressed="true"' : ""}>${ICONS.play}<span>${t("tourStart")}</span></button>
      <button class="tool-btn lang-btn aegov-btn btn-sm btn-secondary btn-soft" data-action="lang" lang="${state.lang === "en" ? "ar" : "en"}">${t("switchLang")}</button>
      <button class="tool-btn aegov-btn btn-sm btn-secondary btn-soft" data-action="theme" aria-label="${t("themeToggle")}">${themeIcon}<span>${themeLabel}</span></button>
    </div>
  </header>`;
}

function renderSidebar() {
  const q = state.query.trim().toLowerCase();
  const groups = {};
  allRoles().forEach(r => {
    if (q && !(r.en.toLowerCase().includes(q) || (r.ar || "").includes(state.query.trim()))) return;
    (groups[r.unit] = groups[r.unit] || []).push(r);
  });
  const keys = Object.keys(UNITS).filter(k => groups[k]);
  const list = keys.length ? keys.map(k => `<div class="unit-group"><div class="unit-name">${L(UNITS[k])}</div>${groups[k].map(r => {
    const st = roleStats(r);
    return `<button class="role-link" data-action="role" data-id="${esc(r.id)}" ${state.roleId === r.id ? 'aria-current="true"' : ""}>
      <span>${esc(L(r))}${r.custom ? ` <span class="custom-tag">${t("yourAnalysis")}</span>` : ""}</span>
      <span class="mini" aria-hidden="true"><span class="c-a" style="width:${st.shares.a}%;background:var(--auto)"></span><span style="width:${st.shares.g}%;background:var(--aug)"></span><span style="width:${st.shares.h}%;background:var(--human)"></span></span>
    </button>`;
  }).join("")}</div>`).join("") : `<p class="unit-name">${t("noMatch")}</p>`;
  const picker = `<div class="aegov-form-control role-field"><label class="visually-hidden" for="rolePick">${t("tabRoles")}</label><div class="form-control-input"><select id="rolePick" data-input="rolePick">${Object.keys(UNITS).map(k => {
    const rs = allRoles().filter(r => r.unit === k);
    return rs.length ? `<optgroup label="${esc(L(UNITS[k]))}">${rs.map(r => `<option value="${esc(r.id)}" ${r.id === state.roleId ? "selected" : ""}>${esc(L(r))}</option>`).join("")}</optgroup>` : "";
  }).join("")}</select></div></div>`;
  const search = `<div class="aegov-form-control search-field"><label class="visually-hidden" for="search">${t("search")}</label><div class="form-control-input"><span class="control-prefix">${ICONS.search}</span><input id="search" type="search" placeholder="${t("search")}" value="${esc(state.query)}" data-input="query"></div></div>`;
  const open = state.sidebar;
  const toggle = `<button class="side-toggle aegov-btn btn-sm btn-secondary btn-link btn-icon" data-action="sidebar" aria-controls="side-body" aria-expanded="${open}" aria-label="${open ? t("sideHide") : t("sideShow")}" title="${open ? t("sideHide") : t("sideShow")}">${ICONS.panel}</button>`;
  return `<aside class="sidebar">${picker}<div class="side-head">${search}${toggle}</div><div class="side-body" id="side-body" ${open ? "" : "inert"}>${list}</div></aside>`;
}

function renderRibbon(role) {
  const dim = state.hot !== null && state.hot.role === role.id;
  const segs = role.tasks.map((task, i) => {
    const c = catOf(role, i);
    const changed = c !== task.c;
    const hot = dim && state.hot.i === i;
    const label = task.s >= 9 ? `<span class="seg-label num">${task.s}%</span>` : "";
    return `<button class="seg c-${c}${changed ? " changed" : ""}${hot ? " hot" : ""}" style="flex-grow:${task.s}" data-hover="${i}" data-role="${esc(role.id)}" data-action="jump" title="${esc(L(task))} (${task.s}%)" aria-label="${esc(L(task))}: ${t("cat_" + c)}, ${task.s}%">${label}</button>`;
  }).join("");
  const ticks = [0, 10, 20, 30, 40].map(h => `<span class="num" style="inset-inline-start:${(h / WEEK) * 100}%">${h}${state.lang === "ar" ? " س" : "h"}</span>`).join("");
  const st = roleStats(role);
  const legend = ["a", "g", "h"].map(c => `<li><span class="sw c-${c}"></span>${t("cat_" + c)} <b class="num">${st.shares[c]}%</b></li>`).join("");
  return `<div class="week">
    <div class="week-head"><h2>${t("weekTitle")}</h2><span class="hint">${t("weekHint")}</span></div>
    <div class="ribbon${dim ? " dim" : ""}">${segs}</div>
    <div class="scale" aria-hidden="true">${ticks}</div>
    <ul class="legend">${legend}</ul>
  </div>`;
}

function renderTasks(role) {
  const rows = role.tasks.map((task, i) => {
    const c = catOf(role, i);
    const changed = c !== task.c;
    const hot = state.hot && state.hot.role === role.id && state.hot.i === i;
    const sw = ["a", "g", "h"].map(k => {
      if (k === "a" && task.legal) return `<button class="c-a locked" data-action="guard" data-role="${esc(role.id)}" data-i="${i}" aria-disabled="true" title="${t("guardLocked")}" aria-label="${t("cat_a")}: ${t("guardLocked")}">${ICONS.lockSmall}${t("cat_a")}</button>`;
      return `<button class="c-${k}" data-action="cat" data-role="${esc(role.id)}" data-i="${i}" data-c="${k}" aria-pressed="${c === k}">${t("cat_" + k)}</button>`;
    }).join("");
    const guarded = state.guard && state.guard.role === role.id && state.guard.i === i;
    return `<tr id="task-${esc(role.id)}-${i}" class="${hot ? "hot" : ""}" data-hover="${i}" data-role="${esc(role.id)}">
      <td><div class="task-name">${esc(L(task))}</div><div class="task-why">${esc(why(task))}</div>${changed ? `<span class="changed-note">${t("changed", { c: t("cat_" + task.c) })}</span>` : ""}</td>
      <td class="time num">${task.s}%<small>${hoursText(task.s * WEEK / 100)}</small></td>
      <td class="c-cat"><div class="cat-switch" role="group" aria-label="${t("thCat")}">${sw}</div>${guarded ? `<div class="guard-note aegov-alert alert-warning alert-sm" role="alert"><div class="alert-icon">${ICONS.lock}</div><div class="alert-content"><p class="alert-title">${t("guardTitle")}</p><p>${t("guardBody")}</p></div></div>` : ""}</td>
      <td class="c-over"><div class="oversight">${t("tier_" + c)}</div></td>
    </tr>`;
  }).join("");
  return `<section class="section">
    <div class="section-head"><h2>${t("tasksTitle")}</h2>${hasOverrides(role) ? `<button class="aegov-btn btn-sm btn-link" data-action="reset" data-role="${esc(role.id)}">${t("resetAll")}</button>` : ""}</div>
    <table class="tasks"><thead><tr><th>${t("thTask")}</th><th>${t("thTime")}</th><th>${t("thCat")}</th><th>${t("thOversight")}</th></tr></thead><tbody>${rows}</tbody></table>
  </section>`;
}

function renderFuture(role) {
  const total = role.path.reduce((a, m) => a + m.weeks, 0);
  const steps = role.path.map(m => `<li><span>${esc(L(m))}</span><span class="weeks num">${weeksText(m.weeks)}</span></li>`).join("");
  return `<section class="section future">
    <div class="future-role">
      <div class="kicker">${t("futureKicker")}</div>
      <h3>${esc(L(role.future))}</h3>
      <p>${esc(state.lang === "ar" ? role.future.d[1] : role.future.d[0])}</p>
      <div class="from-to">${t("fromTo", { a: esc(L(role)), b: esc(L(role.future)) })}</div>
    </div>
    <div class="path">
      <h3>${t("pathTitle")}</h3>
      <ol>${steps}</ol>
      <div class="total"><span>${t("totalWeeks")}</span><span class="num">${weeksText(total)}</span></div>
    </div>
  </section>`;
}

function renderRolePanel(role, extraActions) {
  const st = roleStats(role);
  const freedH = st.freed * WEEK;
  const finding = freedH > 0 ? findingText(Math.round(freedH * 2) / 2, true) : t("findingNone");
  return `<div class="role-meta"><span>${L(UNITS[role.unit] || UNITS.licensing)}</span><span class="num">${staffText(role.headcount)}</span></div>
    <h1 class="role-title">${esc(L(role))}</h1>
    <p class="finding">${finding}</p>
    ${renderRibbon(role)}
    ${renderTasks(role)}
    ${renderFuture(role)}
    <div class="actions">
      <button class="aegov-btn btn-sm btn-outline" data-action="download" data-role="${esc(role.id)}" ${downloadsApi ? "" : "disabled"}>${ICONS.download}${t("download")}</button>
      ${extraActions || ""}
      ${state.toast ? `<span class="toast" role="status">${esc(state.toast)}</span>` : ""}
    </div>`;
}

function renderRolesView() {
  const role = findRole(state.roleId) || ROLES[0];
  const person = personaFor(role.id);
  const link = person ? `<button class="aegov-btn btn-sm btn-link" data-action="employee" data-id="${esc(role.id)}">${t("seeEmployee", { name: esc(L(person.name)) })}</button>` : "";
  return `<div class="layout${state.sidebar ? "" : " side-closed"}">${renderSidebar()}<main class="main" id="main">${renderRolePanel(role, link)}</main></div>`;
}

function deptNumbers() {
  const roles = allRoles();
  const adoption = state.adoption / 100;
  let staff = 0, assisted = 0, freed = 0;
  const rows = roles.map(r => {
    const st = roleStats(r);
    staff += r.headcount;
    assisted += r.headcount * (st.shares.a + st.shares.g) / 100;
    const fte = r.headcount * st.freed * adoption;
    freed += fte;
    return { r, st, fte };
  }).sort((x, y) => y.st.freed - x.st.freed);
  return { rows, staff, assistedPct: staff ? assisted / staff * 100 : 0, freed };
}

function deptParts() {
  const d = deptNumbers();
  const freed = d.freed;
  const nNew = freed * state.shareNew / 100;
  const nService = freed * state.shareService / 100;
  const nAttr = Math.max(0, freed - nNew - nService);
  const cap = d.staff * ATTRITION_RATE * 3;
  const rows = d.rows.map(({ r, st, fte }) => `<button class="fp-row" data-action="role" data-id="${esc(r.id)}">
      <span class="fp-name">${esc(L(r))}</span>
      <span class="fp-staff num">${r.headcount}</span>
      <span class="fp-bar" aria-label="${t("cat_a")} ${st.shares.a}%, ${t("cat_g")} ${st.shares.g}%, ${t("cat_h")} ${st.shares.h}%">${st.shares.a ? `<span class="c-a" style="flex-grow:${st.shares.a}"></span>` : ""}${st.shares.g ? `<span class="c-g" style="flex-grow:${st.shares.g}"></span>` : ""}${st.shares.h ? `<span class="c-h" style="flex-grow:${st.shares.h}"></span>` : ""}</span>
      <span class="fp-fte num">${fmt(fte, 1)}</span>
    </button>`).join("");
  const flowPart = (cls, n) => n > 0.05 ? `<span class="${cls} num" style="flex-grow:${n}">${freed && n / freed > 0.12 ? fmt(n) : ""}</span>` : "";
  const biz = bizNumbers(nNew, nService, nAttr);
  return {
    bizRows: biz.html,
    title: t("deptTitle", { p: state.adoption }),
    finding: t("deptFinding", { f: `<strong class="num">${fmt(freed)}</strong>` }),
    stats: `<div class="stat"><div class="label">${t("statStaff")}</div><div class="value num">${fmt(d.staff)}</div><div class="sub">${t("statStaffSub", { r: allRoles().length })}</div></div>
      <div class="stat"><div class="label">${t("statAssist")}</div><div class="value num">${fmt(d.assistedPct)}%</div><div class="sub">${t("statAssistSub")}</div></div>
      <div class="stat"><div class="label">${t("statFreed")}</div><div class="value num">${fmt(freed)}</div><div class="sub">${t("statFreedSub")}</div></div>
      <div class="stat"><div class="label">${t("statExits")}</div><div class="value num">0</div><div class="sub">${t("statExitsSub")}</div></div>`,
    adoptionValue: `${state.adoption}%`,
    rows,
    flow: flowPart("f1", nNew) + flowPart("f2", nService) + flowPart("f3", nAttr),
    flowLegend: `<li><span class="sw f1"></span><span>${t("flowNew")}<small>${t("flowNewSub")}</small></span><span class="num">${fteText(nNew)}</span></li>
          <li><span class="sw f2"></span><span>${t("flowService")}<small>${t("flowServiceSub")}</small></span><span class="num">${fteText(nService)}</span></li>
          <li><span class="sw f3"></span><span>${t("flowAttrition")}<small>${t("flowAttritionSub")}</small></span><span class="num">${fteText(nAttr)}</span></li>`,
    check: nAttr > cap ? t("attritionWarn", { cap: fmt(cap) }) : t("attritionOk", { cap: fmt(cap), n: fmt(nAttr) }),
    warn: nAttr > cap,
    shareNewValue: `${state.shareNew}%`,
    shareServiceValue: `${state.shareService}%`
  };
}

function bizNumbers(nNew, nService, nAttr) {
  const personWeeks = allRoles().reduce((a, r) => a + r.headcount * r.path.reduce((x, m) => x + m.weeks, 0), 0);
  const cash = (nNew + nAttr) * state.costFte;
  const reinvest = nService * state.costFte;
  const reskill = personWeeks * state.weekCost;
  const net = cash - state.aiCost;
  // Savings ramp up linearly over 36 months (attrition-led); AI cost is full from month 1.
  let months = null, cum = -reskill;
  for (let m = 1; m <= 36; m++) {
    cum += (cash / 12) * Math.min(1, m / 36) - state.aiCost / 12;
    if (cum >= 0) { months = m; break; }
  }
  const payback = months !== null ? monthsText(months) : t("bizNever");
  const row = (label, sub, value, strong) => `<li class="${strong ? "strong" : ""}"><span>${label}${sub ? `<small>${sub}</small>` : ""}</span><span class="num">${value}</span></li>`;
  const html = row(t("bizCash"), t("bizCashSub", { n: fteText(nNew + nAttr) }), moneyText(cash))
    + row(t("bizReinvest"), t("bizReinvestSub"), moneyText(reinvest))
    + row(t("bizAi"), "", "− " + moneyText(state.aiCost))
    + row(t("bizNet"), "", moneyText(net), true)
    + row(t("bizReskill"), t("bizReskillSub", { w: state.lang === "ar" ? arCount(personWeeks, "weeks") : fmt(personWeeks) }), moneyText(reskill))
    + row(t("bizPayback"), "", payback, true);
  return { html, months, payback };
}

function renderDeptView() {
  const p = deptParts();
  const phases = [[25, "phasePilot"], [60, "phaseScale"], [90, "phaseEmbed"]];
  const pos = v => ((v - 10) / 90) * 100;
  return `<main class="dept" id="main">
    <h1 class="dept-title" data-part="title">${p.title}</h1>
    <p class="finding" data-part="finding">${p.finding}</p>
    <div class="stats" data-part="stats">${p.stats}</div>
    <div class="control">
      <label for="adoption"><span>${t("adoption")}</span><span class="num" data-part="adoptionValue">${p.adoptionValue}</span></label>
      <input id="adoption" type="range" min="10" max="100" step="5" value="${state.adoption}" data-input="adoption" style="${rangeFill(state.adoption, 10, 100)}">
      <div class="phases">${phases.map(([v, k]) => `<button data-action="phase" data-v="${v}" class="${state.adoption === v ? "on" : ""}" style="inset-inline-start:${pos(v)}%">${t(k)} <span class="num">${v}%</span></button>`).join("")}</div>
    </div>
    <section class="fingerprint">
      <div class="section-head"><h2>${t("fpTitle")}</h2></div>
      <div class="fp-row fp-head" aria-hidden="true"><span>${t("fpRole")}</span><span>${t("fpStaff")}</span><span>${t("fpMix")}</span><span class="fp-fte">${t("fpFte")}</span></div>
      <div data-part="rows">${p.rows}</div>
      <ul class="legend">${["a", "g", "h"].map(c => `<li><span class="sw c-${c}"></span>${t("cat_" + c)}</li>`).join("")}</ul>
    </section>
    <section class="people">
      <div>
        <h2 style="font-size:20px">${t("peopleTitle")}</h2>
        <div class="flow" aria-hidden="true" data-part="flow">${p.flow}</div>
        <ul class="flow-legend" data-part="flowLegend">${p.flowLegend}</ul>
        <p class="check${p.warn ? " warn" : ""}" data-part="check">${p.check}</p>
        <div class="control">
          <label for="shareNew"><span>${t("sliderNew")}</span><span class="num" data-part="shareNewValue">${p.shareNewValue}</span></label>
          <input id="shareNew" type="range" min="0" max="100" step="5" value="${state.shareNew}" data-input="shareNew" style="${rangeFill(state.shareNew, 0, 100)}">
          <label for="shareService" style="margin-top:14px"><span>${t("sliderService")}</span><span class="num" data-part="shareServiceValue">${p.shareServiceValue}</span></label>
          <input id="shareService" type="range" min="0" max="100" step="5" value="${state.shareService}" data-input="shareService" style="${rangeFill(state.shareService, 0, 100)}">
        </div>
      </div>
      <aside class="assumptions"><h3>${t("assumptionsTitle")}</h3><ul><li>${t("assume1")}</li><li>${t("assume2")}</li><li>${t("assume3")}</li><li>${t("assume4")}</li><li>${t("assume5")}</li></ul></aside>
    </section>
    <section class="biz">
      <div>
        <h2 style="font-size:20px">${t("bizTitle")}</h2>
        <p class="analyse-intro">${t("bizIntro")}</p>
        <ul class="biz-list" data-part="bizRows">${p.bizRows}</ul>
        <p class="check">${t("bizNote")}</p>
      </div>
      <aside class="assumptions">
        <h3>${t("bizInputs")}</h3>
        <div class="aegov-form-control field"><label for="costFte">${t("inCost")}</label><div class="form-control-input"><input id="costFte" type="number" inputmode="numeric" min="0" step="10000" value="${state.costFte}" data-input="costFte"></div></div>
        <div class="aegov-form-control field"><label for="aiCost">${t("inAi")}</label><div class="form-control-input"><input id="aiCost" type="number" inputmode="numeric" min="0" step="500000" value="${state.aiCost}" data-input="aiCost"></div></div>
        <div class="aegov-form-control field"><label for="weekCost">${t("inWeek")}</label><div class="form-control-input"><input id="weekCost" type="number" inputmode="numeric" min="0" step="250" value="${state.weekCost}" data-input="weekCost"></div></div>
      </aside>
    </section>
  </main>`;
}

// Updates the department figures in place so a slider being dragged is never replaced.
function dateText(d, opts) {
  return new Intl.DateTimeFormat(state.lang === "ar" ? "ar-AE-u-nu-latn" : "en-GB", opts || { day: "numeric", month: "short", year: "numeric" }).format(d);
}
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function hrs(h) { const v = Math.round(h * 10) / 10; return state.lang === "ar" ? `${fmtHours(v)} س` : `${fmtHours(v)} h`; }

function personaFor(roleId) { return EMPLOYEES.find(e => e.roleId === roleId) || null; }
function tg(person, key, vars) { return t(key + "_" + person.g, vars); }
function lcFirst(x) { return /^[A-Z]{2}/.test(x) ? x : x.charAt(0).toLowerCase() + x.slice(1); }

// Training runs module after module from the unit's wave start; each module ends on the Friday of its last week.
function employeePlan(person) {
  const role = ROLES.find(r => r.id === person.roleId);
  const start = new Date((WAVES[role.unit] || WAVES.licensing) + "T00:00:00");
  let cursor = start;
  const modules = role.path.map(m => {
    const from = cursor, to = addDays(cursor, m.weeks * 7 - 3);
    cursor = addDays(cursor, m.weeks * 7);
    return { m, from, to };
  });
  const before = role.tasks.map(task => task.s / 100 * WEEK);
  const after = role.tasks.map((task, i) => before[i] * (1 - REDUCTION[catOf(role, i)]));
  const freed = WEEK - after.reduce((a, b) => a + b, 0);
  // Round the new work to one decimal and give the remainder to the last item, so the week still totals 40.
  const newWork = NEW_WORK_SHARES.map(sh => Math.round(freed * sh * 10) / 10);
  newWork[newWork.length - 1] = Math.round((freed - newWork.slice(0, -1).reduce((a, b) => a + b, 0)) * 10) / 10;
  return { role, start, modules, roleStart: cursor, before, after, freed, newWork, weeks: role.path.reduce((a, m) => a + m.weeks, 0) };
}

function nextRoleTitle(person, role) { return state.lang === "ar" ? (person.nextAr || role.future.ar) : role.future.en; }
function nextRoleDesc(person, role) { return state.lang === "ar" ? (person.nextDAr || role.future.d[1]) : role.future.d[0]; }

function weekBar(person, role, hours, extra) {
  const segs = role.tasks.map((task, i) => hours[i] > 0.05
    ? `<span class="c-${catOf(role, i)}" style="flex-grow:${hours[i]}" title="${esc(L(task))}">${hours[i] >= 2.5 ? hrs(hours[i]) : ""}</span>` : "").join("");
  const more = (extra || []).map((h, j) => h > 0.05 ? `<span class="nw" style="flex-grow:${h}" title="${esc(L(person.newWork[j]))}">${h >= 2.5 ? hrs(h) : ""}</span>` : "").join("");
  return `<div class="emp-bar" aria-hidden="true">${segs}${more}</div>`;
}

function renderEmployeePicker(current) {
  const groups = Object.keys(UNITS).map(k => {
    const people = EMPLOYEES.filter(e => (ROLES.find(r => r.id === e.roleId) || {}).unit === k);
    return people.length ? `<optgroup label="${esc(L(UNITS[k]))}">${people.map(e => `<option value="${esc(e.roleId)}" ${e.roleId === current.roleId ? "selected" : ""}>${esc(L(e.title))}</option>`).join("")}</optgroup>` : "";
  }).join("");
  return `<div class="aegov-form-control emp-pick"><label for="empPick">${t("empPick")}</label><div class="form-control-input"><select id="empPick" data-input="empPick">${groups}</select></div></div>`;
}

function renderEmployeeView() {
  const person = personaFor(state.empRole) || EMPLOYEES[0];
  const p = employeePlan(person);
  const { role } = p;
  const long = { day: "numeric", month: "long", year: "numeric" };
  const fr = Math.round(p.freed * 10) / 10;
  const freedText = state.lang === "ar" ? arCount(fr, "hours") : `${fmtHours(fr)} hours`;
  const nextEn = lcFirst(role.future.en);
  const next = state.lang === "ar" ? nextRoleTitle(person, role) : `${/^[aeiou]/i.test(nextEn) ? "an" : "a"} ${nextEn}`;
  const lead = tg(person, "empLead", { h: `<strong>${freedText}</strong>`, w: weeksText(p.weeks), start: dateText(p.start, long), next: esc(next), date: dateText(p.roleStart, long) });
  const afterLabel = t("empAfter", { date: dateText(p.roleStart, { month: "short", year: "numeric" }) });
  const years = state.lang === "ar" ? arCount(person.years, "years") : `${person.years} years`;
  const rows = role.tasks.map((task, i) => `<tr><td>${esc(L(task))}</td><td class="num">${hrs(p.before[i])}</td><td class="num">${hrs(p.after[i])}</td></tr>`).join("")
    + person.newWork.map((w, j) => `<tr class="new"><td>${esc(L(w))}</td><td><span class="aegov-badge">${t("empNew")}</span></td><td class="num">${hrs(p.newWork[j])}</td></tr>`).join("");
  const modules = p.modules.map(({ m, from, to }) => `<li><span>${esc(L(m))}</span><span class="when num">${dateText(from, { day: "numeric", month: "short" })} – ${dateText(to)}</span></li>`).join("");
  const commits = COMMITMENTS.concat([person.owns]).map(c => `<li>${ICONS.check}<span>${esc(L(c))}</span></li>`).join("");
  return `<main class="emp" id="main">
    ${renderEmployeePicker(person)}
    <div class="role-meta"><span>${L(UNITS[role.unit])}</span><span>${t("empMeta", { n: years })}</span><span>${tg(person, "empPersona")}</span></div>
    <h1 class="role-title">${esc(L(person.title))}</h1>
    <p class="finding">${lead}</p>
    <section class="section emp-week">
      <div class="section-head"><h2>${tg(person, "empWeekTitle")}</h2></div>
      <div class="emp-rows">
        <div class="emp-row"><span class="emp-label">${t("empToday")}</span>${weekBar(person, role, p.before)}</div>
        <div class="emp-row"><span class="emp-label">${afterLabel}</span>${weekBar(person, role, p.after, p.newWork)}</div>
      </div>
      <ul class="legend">${["a", "g", "h"].map(c => `<li><span class="sw c-${c}"></span>${t("cat_" + c)}</li>`).join("")}<li><span class="sw nw"></span>${t("empNew")}</li></ul>
      <table class="emp-table">
        <thead><tr><th>${t("thTask")}</th><th>${t("empToday")}</th><th>${afterLabel}</th></tr></thead>
        <tbody>${rows}</tbody>
        <tfoot><tr><td>${t("empTotal")}</td><td class="num">${hrs(WEEK)}</td><td class="num">${hrs(WEEK)}</td></tr></tfoot>
      </table>
    </section>
    <section class="section emp-plan">
      <div class="path">
        <h3>${tg(person, "empTrainTitle")}</h3>
        <ol>${modules}</ol>
        <div class="total"><span>${t("empRoleStarts")}</span><span class="num">${dateText(p.roleStart)}</span></div>
      </div>
      <div class="future-role">
        <div class="kicker">${tg(person, "empNextKicker")}</div>
        <h3>${esc(nextRoleTitle(person, role))}</h3>
        <p>${esc(nextRoleDesc(person, role))}</p>
        <h4 class="commit-title">${t("empCommitTitle")}</h4>
        <ul class="commits">${commits}</ul>
      </div>
    </section>
  </main>`;
}

function rangeFill(v, min, max) { return `background-size:${((v - min) / (max - min)) * 100}% 100%`; }

function updateDept() {
  const p = deptParts();
  for (const key of Object.keys(p)) {
    const el = document.querySelector(`[data-part="${key}"]`);
    if (el) el.innerHTML = p[key];
  }
  const check = document.querySelector('[data-part="check"]');
  if (check) check.classList.toggle("warn", p.warn);
  document.querySelectorAll(".phases button").forEach(b => b.classList.toggle("on", Number(b.dataset.v) === state.adoption));
  const sn = document.getElementById("shareNew"); if (sn && Number(sn.value) !== state.shareNew) sn.value = state.shareNew;
  const ss = document.getElementById("shareService"); if (ss && Number(ss.value) !== state.shareService) ss.value = state.shareService;
  const ad = document.getElementById("adoption"); if (ad && Number(ad.value) !== state.adoption) ad.value = state.adoption;
  [[sn, state.shareNew, 0], [ss, state.shareService, 0], [ad, state.adoption, 10]].forEach(([el, v, min]) => { if (el) el.style.cssText = rangeFill(v, min, 100); });
}

function engineNote() {
  if (API_URL) return t("engineApi");
  if (sampleApi) return t("engineBuiltIn");
  return engineReady ? t("engineNone") : "";
}

function renderAnalyseView() {
  const canRun = Boolean(API_URL || sampleApi);
  let result = "";
  if (state.analysis) {
    const add = state.analysisAdded
      ? `<span class="toast" role="status">${t("added")}</span>`
      : `<button class="aegov-btn btn-sm" data-action="add">${t("addToDept")}</button>`;
    result = `<div class="result">${renderRolePanel(state.analysis, add)}</div>`;
  }
  return `<main class="analyse" id="main">
    <h1 class="role-title">${t("analyseTitle")}</h1>
    <p class="analyse-intro">${t("analyseIntro")}</p>
    <label class="visually-hidden" for="jd">${t("jdPlaceholder")}</label>
    <div class="aegov-form-control jd-field"><label class="visually-hidden" for="jd">${t("analyseTitle")}</label><div class="form-control-input"><textarea id="jd" dir="auto" rows="9" placeholder="${t("jdPlaceholder")}" data-input="jd">${esc(state.jd)}</textarea></div></div>
    <p class="privacy">${ICONS.lock}<span>${t("privacy")}</span></p>
    <div class="actions" style="margin-top:20px">
      <button class="aegov-btn btn-sm" data-action="analyse" ${state.analysing || !canRun ? "disabled" : ""}>${t("analyse")}</button>
      <button class="aegov-btn btn-sm btn-outline" data-action="example" ${state.analysing ? "disabled" : ""}>${t("useExample")}</button>
    </div>
    <p class="engine">${engineNote()}</p>
    ${state.analysing ? `<p class="status" role="status"><span class="spinner"></span>${t("analysing")}</p>` : ""}
    ${state.error ? `<p class="status error" role="alert">${esc(state.error)}</p>` : ""}
    ${result}
  </main>`;
}

function render(opts) {
  const root = document.getElementById("app");
  const active = document.activeElement;
  const focusId = active && active.id;
  const caret = active && active.selectionStart;
  const view = state.view === "dept" ? renderDeptView() : state.view === "analyse" ? renderAnalyseView() : state.view === "employee" ? renderEmployeeView() : renderRolesView();
  root.innerHTML = renderTopbar() + view + `<footer class="foot">${t("footer")}</footer>` + renderTour();
  if (state.tour !== null) applyTourFocus(false);
  if (focusId && (!opts || !opts.noFocus)) {
    const el = document.getElementById(focusId);
    if (el) { el.focus(); if (caret != null && el.setSelectionRange) { try { el.setSelectionRange(caret, caret); } catch (e) {} } }
  }
}

function applyDocAttrs() {
  const html = document.documentElement;
  html.lang = state.lang;
  html.dir = state.lang === "ar" ? "rtl" : "ltr";
  html.dataset.theme = state.theme;
  html.classList.toggle("dark", state.theme === "dark");
  document.title = t("product") + " | " + t("entity");
}

function setHot(roleId, i) {
  const same = state.hot && state.hot.role === roleId && state.hot.i === i;
  if (same) return;
  state.hot = i === null ? null : { role: roleId, i };
  document.querySelectorAll(".ribbon").forEach(rb => rb.classList.toggle("dim", state.hot !== null));
  document.querySelectorAll(".seg").forEach(s => s.classList.toggle("hot", state.hot !== null && s.dataset.role === state.hot.role && Number(s.dataset.hover) === state.hot.i));
  document.querySelectorAll(".tasks tr[data-hover]").forEach(r => r.classList.toggle("hot", state.hot !== null && r.dataset.role === state.hot.role && Number(r.dataset.hover) === state.hot.i));
}

// Report export: a standalone HTML file the viewer can open and print to PDF.
function buildReport(role) {
  const st = roleStats(role);
  const dir = state.lang === "ar" ? "rtl" : "ltr";
  const colours = { a: "#2f6f9f", g: "#a7832e", h: "#3d6b4b" };
  const segs = role.tasks.map((task, i) => `<div style="flex-grow:${task.s};background:${colours[catOf(role, i)]};color:#fff;padding:6px 8px;font-size:12px;font-weight:600">${task.s}%</div>`).join("");
  const rows = role.tasks.map((task, i) => {
    const c = catOf(role, i);
    return `<tr><td><b>${esc(L(task))}</b><br><span style="color:#5b5f6b">${esc(why(task))}</span></td><td>${task.s}%</td><td><span style="color:${colours[c]};font-weight:600">${t("cat_" + c)}</span></td><td>${t("tier_" + c)}</td></tr>`;
  }).join("");
  const path = role.path.map(m => `<li>${esc(L(m))} (${weeksText(m.weeks)})</li>`).join("");
  return `<!DOCTYPE html><html lang="${state.lang}" dir="${dir}"><head><meta charset="utf-8"><title>${esc(t("reportTitle"))}: ${esc(L(role))}</title>
<link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@500;600&family=Inter:wght@400;600&family=Noto+Kufi+Arabic:wght@400;600&display=swap" rel="stylesheet">
<style>body{font-family:${state.lang === "ar" ? "'Noto Kufi Arabic'" : "Inter"},sans-serif;color:#16171b;max-width:860px;margin:40px auto;padding:0 24px;line-height:1.6}h1,h2{font-family:Alexandria,sans-serif;font-weight:600}h1{font-size:28px;margin:4px 0}h2{font-size:18px;margin-top:32px}table{width:100%;border-collapse:collapse;font-size:14px}td,th{text-align:start;padding:10px 8px;border-bottom:1px solid #e2e4e8;vertical-align:top}th{font-weight:500;color:#5b5f6b;font-size:12.5px}.bar{display:flex;gap:2px;border-radius:8px;overflow:hidden;margin:16px 0}.meta{color:#5b5f6b;font-size:13.5px}footer{margin-top:40px;color:#5b5f6b;font-size:12px}@media print{body{margin:0}}</style></head>
<body><div class="meta">${t("entity")} | ${t("reportTitle")}</div><h1>${esc(L(role))}</h1>
<p>${findingText(Math.round(st.freed * WEEK * 2) / 2, false)}</p><div class="bar">${segs}</div>
<p class="meta">${t("cat_a")} ${st.shares.a}% | ${t("cat_g")} ${st.shares.g}% | ${t("cat_h")} ${st.shares.h}%</p>
<h2>${t("tasksTitle")}</h2><table><tr><th>${t("thTask")}</th><th>${t("thTime")}</th><th>${t("thCat")}</th><th>${t("thOversight")}</th></tr>${rows}</table>
<h2>${t("futureKicker")}: ${esc(L(role.future))}</h2><p>${esc(state.lang === "ar" ? role.future.d[1] : role.future.d[0])}</p>
<h2>${t("pathTitle")}</h2><ol>${path}</ol><footer>${t("reportGenerated")}</footer></body></html>`;
}

async function downloadReport(roleId) {
  const role = findRole(roleId);
  if (!role || !downloadsApi) { state.toast = t("downloadUnavailable"); render(); return; }
  try {
    await downloadsApi.save({ filename: `${role.id}-role-report.html`, data: buildReport(role) });
    state.toast = t("downloaded");
  } catch (e) {
    state.toast = e && e.code === "declined" ? t("downloadDeclined") : t("downloadUnavailable");
  }
  render({ noFocus: true });
  setTimeout(() => { state.toast = ""; render({ noFocus: true }); }, 3500);
}

// Live analysis
function buildPrompt(jd) {
  const units = Object.keys(UNITS).join(", ");
  return `You redesign public-sector jobs for the AI era. You work for a UAE government business licensing department.

Read the job description below and return ONLY a JSON object, no other text, with this exact shape:
{
  "en": "role title in English",
  "ar": "role title in Modern Standard Arabic as used by UAE government",
  "unit": one of [${units}],
  "tasks": [
    { "en": "task in English, plain verb-first phrase, under 10 words",
      "ar": "the same task in Arabic",
      "s": integer share of a typical working week in percent,
      "c": "a" | "g" | "h",
      "legal": true if the task decides something with legal effect on a person or business (approvals, refusals, penalties, hiring or employee decisions), otherwise false,
      "w": ["one-sentence reason in English, under 18 words", "the same reason in Arabic"] }
  ],
  "future": { "en": "future role title", "ar": "future role title in Arabic", "d": ["one sentence on what the future role does", "the same in Arabic"] },
  "path": [ { "en": "reskilling module", "ar": "module in Arabic", "weeks": integer from 1 to 6 } ]
}

Rules:
- 4 to 7 tasks. The "s" values must add up to exactly 100.
- "c": "a" = automate (repetitive, rules-based; AI acts and staff spot-check), "g" = augment (AI drafts or recommends and a person approves), "h" = keep human-led (judgement, empathy, accountability, legal authority or physical presence).
- Decisions with legal effect on a person or business are never "a" and must have "legal": true.
- The future role should keep the person's experience and move them toward higher-judgement work.
- 3 reskilling modules.
- Write natural, professional Arabic, not word-for-word translation.

Job description:
"""
${jd}
"""`;
}

function normaliseAnalysis(raw) {
  if (!raw || typeof raw !== "object") throw new Error("format");
  const str = v => typeof v === "string" ? v.trim() : "";
  let tasks = Array.isArray(raw.tasks) ? raw.tasks.slice(0, 8) : [];
  tasks = tasks.map(x => ({
    en: str(x.en), ar: str(x.ar) || str(x.en),
    s: Math.max(1, Math.round(Number(x.s) || 0)),
    c: ["a", "g", "h"].includes(x.c) ? x.c : "g",
    legal: x.legal === true,
    w: Array.isArray(x.w) ? [str(x.w[0]), str(x.w[1]) || str(x.w[0])] : ["", ""]
  })).filter(x => x.en);
  tasks.forEach(x => { if (x.legal && x.c === "a") x.c = "g"; });
  if (tasks.length < 2) throw new Error("format");
  const sum = tasks.reduce((a, x) => a + x.s, 0);
  tasks.forEach(x => { x.s = Math.max(1, Math.round(x.s * 100 / sum)); });
  const diff = 100 - tasks.reduce((a, x) => a + x.s, 0);
  const biggest = tasks.reduce((m, x) => x.s > m.s ? x : m, tasks[0]);
  biggest.s += diff;
  const future = raw.future || {};
  const d = Array.isArray(future.d) ? future.d : ["", ""];
  let path = Array.isArray(raw.path) ? raw.path.slice(0, 4) : [];
  path = path.map(m => ({ en: str(m.en), ar: str(m.ar) || str(m.en), weeks: Math.min(8, Math.max(1, Math.round(Number(m.weeks) || 2))) })).filter(m => m.en);
  return {
    id: "custom-" + Date.now().toString(36),
    custom: true,
    unit: UNITS[raw.unit] ? raw.unit : "licensing",
    headcount: 10,
    en: str(raw.en) || "New role",
    ar: str(raw.ar) || str(raw.en) || "دور جديد",
    tasks,
    future: { en: str(future.en) || "Redesigned role", ar: str(future.ar) || str(future.en) || "دور مُعاد تصميمه", d: [str(d[0]), str(d[1]) || str(d[0])] },
    path: path.length ? path : [{ en: "Working with AI tools", ar: "العمل مع أدوات الذكاء الاصطناعي", weeks: 3 }]
  };
}

function parseJsonText(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < start) throw new Error("format");
  return JSON.parse(text.slice(start, end + 1));
}

async function runAnalysis() {
  const jd = state.jd.trim();
  state.error = "";
  if (!jd) { state.error = t("errorEmpty"); render(); return; }
  if (jd.length < 80) { state.error = t("errorShort"); render(); return; }
  state.analysing = true; state.analysis = null; state.analysisAdded = false;
  render({ noFocus: true });
  try {
    let raw;
    if (API_URL) {
      const res = await fetch(API_URL, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jobDescription: jd }) });
      if (res.status === 429) throw { code: "rate_limited" };
      if (!res.ok) throw new Error("format");
      raw = await res.json();
    } else {
      const opts = { model: "claude-sonnet-5-5", modelTier: "default" };
      if (typeof sampleApi.json === "function") {
        try { raw = await sampleApi.json(buildPrompt(jd), opts); }
        catch (err) { if (err && (err.code === "not_granted" || err.code === "rate_limited")) throw err; raw = null; }
      }
      if (!raw || typeof raw !== "object") {
        const out = await sampleApi(buildPrompt(jd), opts);
        raw = parseJsonText(out.text || "");
      }
    }
    state.analysis = normaliseAnalysis(raw);
  } catch (e) {
    const code = e && e.code;
    state.error = code === "not_granted" ? t("errorDenied") : code === "rate_limited" ? t("errorBusy") : t("errorFailed");
  }
  state.analysing = false;
  render({ noFocus: true });
}


// Guided demo: a captioned walkthrough for screen recordings.
const LO = "licensing-officer";
let tourTimer = null;
function clearTourEffects() {
  if (tourTimer) { clearInterval(tourTimer); tourTimer = null; }
  delete state.overrides[LO];
  state.guard = null;
  state.hot = null;
}
function loHours() { return Math.round(roleStats(ROLES.find(r => r.id === LO)).freed * WEEK * 2) / 2; }
const TOUR = [
  { target: ".week", enter() { state.view = "roles"; state.roleId = LO; },
    text: () => t("tour1", { h: state.lang === "ar" ? arCount(loHours(), "hours") : fmtHours(loHours()) }) },
  { target: `#task-${LO}-4`, enter() { state.view = "roles"; state.roleId = LO; state.overrides[LO] = { 4: "h" }; }, text: () => t("tour2") },
  { target: `#task-${LO}-0`, enter() { state.view = "roles"; state.roleId = LO; state.guard = { role: LO, i: 0 }; }, text: () => t("tour3") },
  { target: ".emp-week", enter() { state.view = "employee"; state.empRole = LO; },
    text: () => { const p = employeePlan(personaFor(LO)); return t("tour4", { n: state.lang === "ar" ? arCount(p.role.headcount, "staff") : fmt(p.role.headcount), start: dateText(p.start, { month: "long" }), month: dateText(p.roleStart, { month: "long" }) }); } },
  { target: ".stats", enter() { state.view = "dept"; state.adoption = 25; },
    after() {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { state.adoption = 60; updateDept(); return; }
      tourTimer = setInterval(() => {
        state.adoption = Math.min(60, state.adoption + 5); updateDept();
        if (state.adoption >= 60) { clearInterval(tourTimer); tourTimer = null; }
      }, 140);
    },
    text: () => { const f = Math.round(deptAt(60)); return t("tour5", { f: state.lang === "ar" ? arCount(f, "staff") : fmt(f) }); } },
  { target: ".people", enter() { state.view = "dept"; state.adoption = 60; }, text: () => t("tour6") },
  { target: ".biz", enter() { state.view = "dept"; state.adoption = 60; },
    text: () => { const f = deptAt(60); const b = bizNumbers(f * state.shareNew / 100, f * state.shareService / 100, Math.max(0, f - f * (state.shareNew + state.shareService) / 100)); return t("tour7", { m: b.payback }); } },
  { target: ".jd-field", enter() { state.view = "analyse"; if (!state.jd) state.jd = t("exampleJD"); }, text: () => t("tour8") }
];
function deptAt(adoption) {
  return allRoles().reduce((a, r) => a + r.headcount * roleStats(r).freed * adoption / 100, 0);
}
function renderTour() {
  if (state.tour === null) return "";
  const i = state.tour, n = TOUR.length, last = i === n - 1;
  return `<div class="tour" role="dialog" aria-live="polite" aria-label="${t("tourStart")}">
    <div class="tour-step num">${t("tourStep", { i: i + 1, n })}</div>
    <p class="tour-text">${TOUR[i].text()}</p>
    <div class="tour-actions">
      <button class="aegov-btn btn-sm btn-link" data-action="tour-end">${t("tourEnd")}</button>
      <span class="tour-nav">
        <button class="aegov-btn btn-sm btn-outline" data-action="tour-back" ${i === 0 ? "disabled" : ""}>${t("tourBack")}</button>
        <button class="aegov-btn btn-sm" data-action="${last ? "tour-end" : "tour-next"}" id="tour-next">${last ? t("tourFinish") : t("tourNext")}</button>
      </span>
    </div>
  </div>`;
}
function applyTourFocus(scroll) {
  document.querySelectorAll(".tour-focus").forEach(el => el.classList.remove("tour-focus"));
  if (state.tour === null) return;
  const el = document.querySelector(TOUR[state.tour].target);
  if (!el) return;
  el.classList.add("tour-focus");
  if (scroll) {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  }
}
let tourSaved = null;
function goTour(i) {
  if (state.tour === null && i !== null) {
    tourSaved = { lo: state.overrides[LO], adoption: state.adoption, view: state.view, roleId: state.roleId, jd: state.jd, empRole: state.empRole };
  }
  clearTourEffects();
  state.tour = i;
  if (i === null) {
    if (tourSaved) {
      if (tourSaved.lo) state.overrides[LO] = tourSaved.lo;
      Object.assign(state, { adoption: tourSaved.adoption, view: tourSaved.view, roleId: tourSaved.roleId, jd: tourSaved.jd, empRole: tourSaved.empRole });
      tourSaved = null;
    }
    document.body.classList.remove("touring"); render({ noFocus: true }); window.scrollTo(0, 0); return;
  }
  document.body.classList.add("touring");
  const step = TOUR[i];
  step.enter();
  render({ noFocus: true });
  applyTourFocus(true);
  if (step.after) step.after();
  const next = document.getElementById("tour-next"); if (next) next.focus({ preventScroll: true });
}
document.addEventListener("keydown", e => {
  if (state.tour === null) return;
  const fwd = state.lang === "ar" ? "ArrowLeft" : "ArrowRight";
  const back = state.lang === "ar" ? "ArrowRight" : "ArrowLeft";
  if (e.key === "Escape") { e.preventDefault(); goTour(null); }
  else if (e.key === fwd && state.tour < TOUR.length - 1) { e.preventDefault(); goTour(state.tour + 1); }
  else if (e.key === back && state.tour > 0) { e.preventDefault(); goTour(state.tour - 1); }
});

// Events
document.addEventListener("click", e => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const a = el.dataset.action;
  if (a === "sidebar") {
    state.sidebar = !state.sidebar; store("sidebar", state.sidebar ? "open" : "closed");
    const layout = document.querySelector(".layout"); if (layout) layout.classList.toggle("side-closed", !state.sidebar);
    const body = document.getElementById("side-body"); if (body) body.toggleAttribute("inert", !state.sidebar);
    const label = state.sidebar ? t("sideHide") : t("sideShow");
    el.setAttribute("aria-expanded", String(state.sidebar)); el.setAttribute("aria-label", label); el.title = label;
    return;
  }
  if (a === "tour-start") { goTour(0); return; }
  if (a === "tour-next") { goTour(Math.min(TOUR.length - 1, state.tour + 1)); return; }
  if (a === "tour-back") { goTour(Math.max(0, state.tour - 1)); return; }
  if (a === "tour-end") { goTour(null); return; }
  if (a === "view") { state.view = el.dataset.view; state.toast = ""; render({ noFocus: true }); window.scrollTo(0, 0); }
  else if (a === "lang") { const wasExample = state.jd === t("exampleJD"); state.lang = state.lang === "en" ? "ar" : "en"; if (wasExample) state.jd = t("exampleJD"); store("lang", state.lang); applyDocAttrs(); render({ noFocus: true }); }
  else if (a === "theme") { state.theme = state.theme === "dark" ? "light" : "dark"; store("theme", state.theme); applyDocAttrs(); render({ noFocus: true }); }
  else if (a === "employee") { state.empRole = el.dataset.id; state.view = "employee"; state.toast = ""; render({ noFocus: true }); window.scrollTo(0, 0); }
  else if (a === "role") { state.roleId = el.dataset.id; state.view = "roles"; state.hot = null; state.toast = ""; state.guard = null; render({ noFocus: true }); window.scrollTo(0, 0); }
  else if (a === "cat") {
    const role = findRole(el.dataset.role); const i = Number(el.dataset.i); const c = el.dataset.c;
    if (!role) return;
    const o = state.overrides[role.id] = state.overrides[role.id] || {};
    if (role.tasks[i].legal && c === "a") return;
    if (role.tasks[i].c === c) delete o[i]; else o[i] = c;
    state.guard = null;
    render({ noFocus: true });
    const again = document.querySelector(`[data-action="cat"][data-role="${CSS.escape(role.id)}"][data-i="${i}"][data-c="${c}"]`);
    if (again) again.focus();
  }
  else if (a === "guard") {
    state.guard = { role: el.dataset.role, i: Number(el.dataset.i) };
    render({ noFocus: true });
    const again = document.querySelector(`[data-action="guard"][data-role="${CSS.escape(el.dataset.role)}"][data-i="${el.dataset.i}"]`);
    if (again) again.focus();
  }
  else if (a === "reset") { delete state.overrides[el.dataset.role]; render({ noFocus: true }); }
  else if (a === "jump") {
    const row = document.getElementById(`task-${el.dataset.role}-${el.dataset.hover}`);
    if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  else if (a === "phase") { state.adoption = Number(el.dataset.v); updateDept(); }
  else if (a === "download") { downloadReport(el.dataset.role); }
  else if (a === "example") { state.jd = t("exampleJD"); state.error = ""; render({ noFocus: true }); }
  else if (a === "analyse") { runAnalysis(); }
  else if (a === "add") {
    if (state.analysis && !state.custom.find(r => r.id === state.analysis.id)) state.custom.push(state.analysis);
    state.analysisAdded = true; render({ noFocus: true });
  }
});

document.addEventListener("input", e => {
  const el = e.target;
  const k = el.dataset && el.dataset.input;
  if (!k) return;
  if (k === "query") { state.query = el.value; render(); }
  else if (k === "jd") { state.jd = el.value; }
  else if (k === "costFte" || k === "aiCost" || k === "weekCost") { const v = Number(el.value); if (Number.isFinite(v) && v >= 0) { state[k] = v; updateDept(); } }
  else if (k === "empPick") { state.empRole = el.value; render(); }
  else if (k === "rolePick") { state.roleId = el.value; state.hot = null; render({ noFocus: true }); }
  else if (k === "adoption") { state.adoption = Number(el.value); updateDept(); }
  else if (k === "shareNew") { state.shareNew = Number(el.value); if (state.shareNew + state.shareService > 100) state.shareService = 100 - state.shareNew; updateDept(); }
  else if (k === "shareService") { state.shareService = Number(el.value); if (state.shareNew + state.shareService > 100) state.shareNew = 100 - state.shareService; updateDept(); }
});

document.addEventListener("mouseover", e => {
  const el = e.target.closest("[data-hover]");
  if (el) setHot(el.dataset.role, Number(el.dataset.hover));
});
document.addEventListener("mouseout", e => {
  const el = e.target.closest("[data-hover]");
  if (el && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest("[data-hover]"))) setHot(null, null);
});
document.addEventListener("focusin", e => {
  const el = e.target.closest("[data-hover]");
  if (el) setHot(el.dataset.role, Number(el.dataset.hover));
});

function init() {
  const savedLang = recall("lang");
  const savedTheme = recall("theme");
  state.lang = savedLang === "ar" ? "ar" : "en";
  state.sidebar = recall("sidebar") !== "closed";
  state.theme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyDocAttrs();
  render({ noFocus: true });
  connectCapabilities(0);
}

// The host injects window.claude; wait briefly for it, then light up live analysis and downloads.
function connectCapabilities(attempt) {
  const c = window.claude;
  if (!c || typeof c.use !== "function") {
    if (attempt < 15) { setTimeout(() => connectCapabilities(attempt + 1), 200); return; }
    engineReady = true; if (state.view === "analyse") render({ noFocus: true });
    return;
  }
  Promise.resolve(c.use("sample")).then(s => { sampleApi = s || null; }).catch(() => {}).finally(() => { engineReady = true; render({ noFocus: true }); });
  Promise.resolve(c.use("downloads")).then(d => { downloadsApi = d || null; render({ noFocus: true }); }).catch(() => {});
}
init();
