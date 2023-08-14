let ServiceActions5KmText = `
    🔍 فحص مستوى زيت المحرك ولونه ورائحته
    🔍 فحص مستوى سائل التبريد في الخزان
    🔍 فحص مستوى زيت الفرامل / القابض في الخزان
    🔍 فحص جميع السيور بحثًا عن أي تمزقات أو شقوق
    🔍 فحص مستوى سائل الactuator في الخزان
        ✍ ملاحظة: تحقق بعد عودة كل السوائل إلى الخزان
    🔍 فحص مانع تسريب خزان سائل الactuator ولا يوجد تسرب للسوائل
    🔍 فحص نظام التعليق (العفشة) بحثًا عن أي ضرر
    🔍 قم بتشحيم وتربيط مكونات التعليق (العفشة)
    🔍تنظيف فلتر هواء المقصورة (التكييف)
    🔍 فحص ضغط الإطارات (29PSI / 200KPa / 2 BAR)
    🔍 فحص الإطارات بحثًا عن أي صدع أو قطع
    🔍 فحص مستوى سائل غسيل الزجاج الأمامي في الخزان
    🔍 تطبيق واقي المطاط على الإطارات وجميع الأجزاء المطاطية في السيارة
`;
let ServiceActions10KmText = `
    ✅تغيير زيت الماتور
        ✍المواصفات الموصي بها: اللزوجة: <em>0W20</em> المواصفة: <em>SP</em>
        ✍المواصفات البديلة: اللزوجة: <em>5W30</em> المواصفة: <em>SN plus / SN</em>
        ✍الكمية: <em>3100ml</em> بالكمية داخل الفلتر
        ✍شد عزم الدوران لسدادة التصريف: <em>35Nm</em>

    ✅تغيير فلتر زيت الماتور
        ✍رقم القطعة: <a href="https://www.marutisuzuki.com/genuine-parts/oil-filter/16510m68k00">16510M68K00</a> / <a href="https://www.marutisuzuki.com/genuine-parts/oil-filter/16510m68k20">16510M68K20</a>
        ✍شد عزم الدوران لفلتر الزيت: <em>14Nm</em> or <em>3/4 turn</em>

    ✅تدوير الإطارات
        ✍تتحرك الإطارات الخلفية إلى الأمام قطريًا
        ✍تتحرك الإطارات الأمامية إلى الخلف في نفس الجانب
`;
let ServiceActions20KmText = `
    ✅تغيير شمع الاحتراق (البوجيهات)
        الموديل الموصي به: NGK LKR6F-10
        ✍رقم القطعة: <a href="https://www.marutisuzuki.com/genuine-parts/spark-plug/09482m00636">09482M00636</a>
        ✍شد عزم الدوران: <em>18Nm</em>

    ✅تغيير فلتر هواء المحرك
        ✍رقم القطعة: <a href="https://www.marutisuzuki.com/genuine-parts/air-filter/13780m68p01">13780M68P01</a>
`;
let ServiceActions30KmText = `
    ✅تغيير زيت الفرامل/الدبرياج
        ✍المواصفات الموصي بها: <em>DOT3/DOT4</em>
        ✍الكمية: <em>~500ml</em>
`;
let ServiceActions40KmText = `
    ✅تغيير سائل التبريد (الرادياتير)
        ✍المواصفات الموصي بها: OAT Pre-Mixed 50% Ethylene Glycol
        ✍الكمية: <em>4100ml</em>

    ✅تغيير زيت ناقل الحركة
        ✍المواصفات الموصي بها: لزوجة <em>75W</em>
        ✍الكمية: <em>1500ml</em>
        ✍شد عزم الدوران لسدادة المستوى: <em>21Nm</em>

    ✅تغيير فلتر هواء المقصورة (التكييف)
        ✍رقم القطعة: <a href="https://www.marutisuzuki.com/genuine-accessories/cabin-air-filter-pm25/990j0m56rs0-010">990J0M56RS0-010</a>

    ✅تغيير سير التكييف
        ✍رقم القطعة: <a href="https://www.marutisuzuki.com/genuine-parts/v-belt-4pk/95141m55r30">95141M55R30</a>

    ✅تغيير سير مضخة المياة(المجموعة)
        ✍رقم القطعة: <a href="https://www.marutisuzuki.com/genuine-parts/belt-water-pump/17521m68p00">17521M68P00</a>
`
let ServiceActions60KmText = `
    ✅تغيير الإطارات
        ✍المقاس الأصلي: R15 185/65
        ✍المقاس الأعرض: R15 195/60
`;
let ServiceActions100KmText = `
    ✅تغيير فلتر الوقود
        ✍رقم القطعة: <a href="https://www.marutisuzuki.com/genuine-parts/fuel-filter-assembly/15410m68p00">15410M68P00</a>
`;

let WrongInputPromptText = "قيمة غير صحيحة!";
let NoMaintenanceRequiredPromptText = "الصيانة غير مطلوبة!";
let RequiredServicesText = "الصيانات المطلوبة";
let InspectionsText = "الفحوصات";
let ServiceCostText = "تكلفة الصيانة";
let ServiceCostDisclaimerText = "التكلفة المعروضة أدناه هي مجرد قيمة تقريبية\n    للتكلفة الفعلية، اتصل بمركز خدمة سوزوكي ... \n    تكلفة الإطارات نفسها ليست مضافة للتكلفة المعروضة أدناه ...";
