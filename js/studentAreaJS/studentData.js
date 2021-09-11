
function media(doc) {
    const turma = document.querySelector('#turma h4')
    const studentEmail = document.querySelector('#user-name')
    const studentName = document.querySelector('#name h3')

    // ===========================subjects===============
    const matb1 = document.querySelector('#mat-b1')
    const matb2 = document.querySelector('#mat-b2')
    const matb3 = document.querySelector('#mat-b3')
    const matb4 = document.querySelector('#mat-b4')
    // ==========================================

    const quib1 = document.querySelector('#qui-b1')
    const quib2 = document.querySelector('#qui-b2')
    const quib3 = document.querySelector('#qui-b3')
    const quib4 = document.querySelector('#qui-b4')

    // ==========================================

    const fisb1 = document.querySelector('#fis-b1')
    const fisb2 = document.querySelector('#fis-b2')
    const fisb3 = document.querySelector('#fis-b3')
    const fisb4 = document.querySelector('#fis-b4')

    // ==========================================

    const ingb1 = document.querySelector('#ing-b1')
    const ingb2 = document.querySelector('#ing-b2')
    const ingb3 = document.querySelector('#ing-b3')
    const ingb4 = document.querySelector('#ing-b4')

    // ==========================================

    const biob1 = document.querySelector('#bio-b1')
    const biob2 = document.querySelector('#bio-b2')
    const biob3 = document.querySelector('#bio-b3')
    const biob4 = document.querySelector('#bio-b4')

    // ==========================================

    const artb1 = document.querySelector('#art-b1')
    const artb2 = document.querySelector('#art-b2')
    const artb3 = document.querySelector('#art-b3')
    const artb4 = document.querySelector('#art-b4')

    // ==========================================

    const efib1 = document.querySelector('#efi-b1')
    const efib2 = document.querySelector('#efi-b2')
    const efib3 = document.querySelector('#efi-b3')
    const efib4 = document.querySelector('#efi-b4')

    // ==========================================

    const geob1 = document.querySelector('#geo-b1')
    const geob2 = document.querySelector('#geo-b2')
    const geob3 = document.querySelector('#geo-b3')
    const geob4 = document.querySelector('#geo-b4')

    // ==========================================

    const lpob1 = document.querySelector('#lpo-b1')
    const lpob2 = document.querySelector('#lpo-b2')
    const lpob3 = document.querySelector('#lpo-b3')
    const lpob4 = document.querySelector('#lpo-b4')

    // ==========================================

    const hisb1 = document.querySelector('#his-b1')
    const hisb2 = document.querySelector('#his-b2')
    const hisb3 = document.querySelector('#his-b3')
    const hisb4 = document.querySelector('#his-b4')

    // ==========================================



    studentEmail.textContent = (doc.data().email)
    studentName.textContent = (doc.data().nome)
    turma.textContent = (doc.data().turma)

    matb1.textContent = (doc.data().notas.bimestre1.matematica)
    matb2.textContent = (doc.data().notas.bimestre2.matematica)
    matb3.textContent = (doc.data().notas.bimestre3.matematica)
    matb4.textContent = (doc.data().notas.bimestre4.matematica)

    quib1.textContent = (doc.data().notas.bimestre1.quimica)
    quib2.textContent = (doc.data().notas.bimestre2.quimica)
    quib3.textContent = (doc.data().notas.bimestre3.quimica)
    quib4.textContent = (doc.data().notas.bimestre4.quimica)

    fisb1.textContent = (doc.data().notas.bimestre1.fisica)
    fisb2.textContent = (doc.data().notas.bimestre2.fisica)
    fisb3.textContent = (doc.data().notas.bimestre3.fisica)
    fisb4.textContent = (doc.data().notas.bimestre4.fisica)

    ingb1.textContent = (doc.data().notas.bimestre1.ingles)
    ingb2.textContent = (doc.data().notas.bimestre2.ingles)
    ingb3.textContent = (doc.data().notas.bimestre3.ingles)
    ingb4.textContent = (doc.data().notas.bimestre4.ingles)

    biob1.textContent = (doc.data().notas.bimestre1.biologia)
    biob2.textContent = (doc.data().notas.bimestre2.biologia)
    biob3.textContent = (doc.data().notas.bimestre3.biologia)
    biob4.textContent = (doc.data().notas.bimestre4.biologia)

    artb1.textContent = (doc.data().notas.bimestre1.artes)
    artb2.textContent = (doc.data().notas.bimestre2.artes)
    artb3.textContent = (doc.data().notas.bimestre3.artes)
    artb4.textContent = (doc.data().notas.bimestre4.artes)

    efib1.textContent = (doc.data().notas.bimestre1.edFisica)
    efib2.textContent = (doc.data().notas.bimestre2.edFisica)
    efib3.textContent = (doc.data().notas.bimestre3.edFisica)
    efib4.textContent = (doc.data().notas.bimestre4.edFisica)

    geob1.textContent = (doc.data().notas.bimestre1.geografia)
    geob2.textContent = (doc.data().notas.bimestre2.geografia)
    geob3.textContent = (doc.data().notas.bimestre3.geografia)
    geob4.textContent = (doc.data().notas.bimestre4.geografia)

    lpob1.textContent = (doc.data().notas.bimestre1.portugues)
    lpob2.textContent = (doc.data().notas.bimestre2.portugues)
    lpob3.textContent = (doc.data().notas.bimestre3.portugues)
    lpob4.textContent = (doc.data().notas.bimestre4.portugues)

    hisb1.textContent = (doc.data().notas.bimestre1.historia)
    hisb2.textContent = (doc.data().notas.bimestre2.historia)
    hisb3.textContent = (doc.data().notas.bimestre3.historia)
    hisb4.textContent = (doc.data().notas.bimestre4.historia)
}
