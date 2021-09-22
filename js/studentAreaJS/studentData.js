function media(doc) {
    const turma = document.querySelector('#turma h3')
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



    if (matb1.textContent < 5) {
        matb1.style.color = 'red'
    } else if (matb1.textContent >= 5) {
        matb1.style.color = 'green'
    }
    if (matb2.textContent < 5) {
        matb2.style.color = 'red'
    } else if (matb2.textContent >= 5) {
        matb2.style.color = 'green'
    }
    if (matb3.textContent < 5) {
        matb3.style.color = 'red'
    } else if (matb3.textContent >= 5) {
        matb3.style.color = 'green'
    }
    if (matb4.textContent < 5) {
        matb4.style.color = 'red'
    } else if (matb4.textContent >= 5) {
        matb4.style.color = 'green'
    }



    quib1.textContent = (doc.data().notas.bimestre1.quimica)
    quib2.textContent = (doc.data().notas.bimestre2.quimica)
    quib3.textContent = (doc.data().notas.bimestre3.quimica)
    quib4.textContent = (doc.data().notas.bimestre4.quimica)



    if (quib1.textContent < 5) {
        quib1.style.color = 'red'
    } else if (quib1.textContent >= 5) {
        quib1.style.color = 'green'
    }
    if (quib2.textContent < 5) {
        quib2.style.color = 'red'
    } else if (quib2.textContent >= 5) {
        quib2.style.color = 'green'
    }
    if (quib3.textContent < 5) {
        quib3.style.color = 'red'
    } else if (quib3.textContent >= 5) {
        quib3.style.color = 'green'
    }
    if (quib4.textContent < 5) {
        quib4.style.color = 'red'
    } else if (quib4.textContent >= 5) {
        quib4.style.color = 'green'
    }



    fisb1.textContent = (doc.data().notas.bimestre1.fisica)
    fisb2.textContent = (doc.data().notas.bimestre2.fisica)
    fisb3.textContent = (doc.data().notas.bimestre3.fisica)
    fisb4.textContent = (doc.data().notas.bimestre4.fisica)



    if (fisb1.textContent < 5) {
        fisb1.style.color = 'red'
    } else if (fisb1.textContent >= 5) {
        fisb1.style.color = 'green'
    }
    if (fisb2.textContent < 5) {
        fisb2.style.color = 'red'
    } else if (fisb2.textContent >= 5) {
        fisb2.style.color = 'green'
    }
    if (fisb3.textContent < 5) {
        fisb3.style.color = 'red'
    } else if (fisb3.textContent >= 5) {
        fisb3.style.color = 'green'
    }
    if (fisb4.textContent < 5) {
        fisb4.style.color = 'red'
    } else if (fisb4.textContent >= 5) {
        fisb4.style.color = 'green'
    }



    ingb1.textContent = (doc.data().notas.bimestre1.ingles)
    ingb2.textContent = (doc.data().notas.bimestre2.ingles)
    ingb3.textContent = (doc.data().notas.bimestre3.ingles)
    ingb4.textContent = (doc.data().notas.bimestre4.ingles)



    if (ingb1.textContent < 5) {
        ingb1.style.color = 'red'
    } else if (ingb1.textContent >= 5) {
        ingb1.style.color = 'green'
    }
    if (ingb2.textContent < 5) {
        ingb2.style.color = 'red'
    } else if (ingb2.textContent >= 5) {
        ingb2.style.color = 'green'
    }
    if (ingb3.textContent < 5) {
        ingb3.style.color = 'red'
    } else if (ingb3.textContent >= 5) {
        ingb3.style.color = 'green'
    }
    if (ingb4.textContent < 5) {
        ingb4.style.color = 'red'
    } else if (ingb4.textContent >= 5) {
        ingb4.style.color = 'green'
    }



    biob1.textContent = (doc.data().notas.bimestre1.biologia)
    biob2.textContent = (doc.data().notas.bimestre2.biologia)
    biob3.textContent = (doc.data().notas.bimestre3.biologia)
    biob4.textContent = (doc.data().notas.bimestre4.biologia)



    if (biob1.textContent < 5) {
        biob1.style.color = 'red'
    } else if (biob1.textContent >= 5) {
        biob1.style.color = 'green'
    }
    if (biob2.textContent < 5) {
        biob2.style.color = 'red'
    } else if (biob2.textContent >= 5) {
        biob2.style.color = 'green'
    }
    if (biob3.textContent < 5) {
        biob3.style.color = 'red'
    } else if (biob3.textContent >= 5) {
        biob3.style.color = 'green'
    }
    if (biob4.textContent < 5) {
        biob4.style.color = 'red'
    } else if (biob4.textContent >= 5) {
        biob4.style.color = 'green'
    }



    artb1.textContent = (doc.data().notas.bimestre1.artes)
    artb2.textContent = (doc.data().notas.bimestre2.artes)
    artb3.textContent = (doc.data().notas.bimestre3.artes)
    artb4.textContent = (doc.data().notas.bimestre4.artes)



    if (artb1.textContent < 5) {
        artb1.style.color = 'red'
    } else if (artb1.textContent >= 5) {
        artb1.style.color = 'green'
    }
    if (artb2.textContent < 5) {
        artb2.style.color = 'red'
    } else if (artb2.textContent >= 5) {
        artb2.style.color = 'green'
    }
    if (artb3.textContent < 5) {
        artb3.style.color = 'red'
    } else if (artb3.textContent >= 5) {
        artb3.style.color = 'green'
    }
    if (artb4.textContent < 5) {
        artb4.style.color = 'red'
    } else if (artb4.textContent >= 5) {
        artb4.style.color = 'green'
    }



    efib1.textContent = (doc.data().notas.bimestre1.edFisica)
    efib2.textContent = (doc.data().notas.bimestre2.edFisica)
    efib3.textContent = (doc.data().notas.bimestre3.edFisica)
    efib4.textContent = (doc.data().notas.bimestre4.edFisica)



    if (efib1.textContent < 5) {
        efib1.style.color = 'red'
    } else if (efib1.textContent >= 5) {
        efib1.style.color = 'green'
    }
    if (efib2.textContent < 5) {
        efib2.style.color = 'red'
    } else if (efib2.textContent >= 5) {
        efib2.style.color = 'green'
    }
    if (efib3.textContent < 5) {
        efib3.style.color = 'red'
    } else if (efib3.textContent >= 5) {
        efib3.style.color = 'green'
    }
    if (efib4.textContent < 5) {
        efib4.style.color = 'red'
    } else if (efib4.textContent >= 5) {
        efib4.style.color = 'green'
    }



    geob1.textContent = (doc.data().notas.bimestre1.geografia)
    geob2.textContent = (doc.data().notas.bimestre2.geografia)
    geob3.textContent = (doc.data().notas.bimestre3.geografia)
    geob4.textContent = (doc.data().notas.bimestre4.geografia)



    if (geob1.textContent < 5) {
        geob1.style.color = 'red'
    } else if (geob1.textContent >= 5) {
        geob1.style.color = 'green'
    }
    if (geob2.textContent < 5) {
        geob2.style.color = 'red'
    } else if (geob2.textContent >= 5) {
        geob2.style.color = 'green'
    }
    if (geob3.textContent < 5) {
        geob3.style.color = 'red'
    } else if (geob3.textContent >= 5) {
        geob3.style.color = 'green'
    }
    if (geob4.textContent < 5) {
        geob4.style.color = 'red'
    } else if (geob4.textContent >= 5) {
        geob4.style.color = 'green'
    }



    lpob1.textContent = (doc.data().notas.bimestre1.portugues)
    lpob2.textContent = (doc.data().notas.bimestre2.portugues)
    lpob3.textContent = (doc.data().notas.bimestre3.portugues)
    lpob4.textContent = (doc.data().notas.bimestre4.portugues)



    if (lpob1.textContent < 5) {
        lpob1.style.color = 'red'
    } else if (lpob1.textContent >= 5) {
        lpob1.style.color = 'green'
    }
    if (lpob2.textContent < 5) {
        lpob2.style.color = 'red'
    } else if (lpob2.textContent >= 5) {
        lpob2.style.color = 'green'
    }
    if (lpob3.textContent < 5) {
        lpob3.style.color = 'red'
    } else if (lpob3.textContent >= 5) {
        lpob3.style.color = 'green'
    }
    if (lpob4.textContent < 5) {
        lpob4.style.color = 'red'
    } else if (lpob4.textContent >= 5) {
        lpob4.style.color = 'green'
    }



    hisb1.textContent = (doc.data().notas.bimestre1.historia)
    hisb2.textContent = (doc.data().notas.bimestre2.historia)
    hisb3.textContent = (doc.data().notas.bimestre3.historia)
    hisb4.textContent = (doc.data().notas.bimestre4.historia)



    if (hisb1.textContent < 5) {
        hisb1.style.color = 'red'
    } else if (hisb1.textContent >= 5) {
        hisb1.style.color = 'green'
    }
    if (hisb2.textContent < 5) {
        hisb2.style.color = 'red'
    } else if (hisb2.textContent >= 5) {
        hisb2.style.color = 'green'
    }
    if (hisb3.textContent < 5) {
        hisb3.style.color = 'red'
    } else if (hisb3.textContent >= 5) {
        hisb3.style.color = 'green'
    }
    if (hisb4.textContent < 5) {
        hisb4.style.color = 'red'
    } else if (hisb4.textContent >= 5) {
        hisb4.style.color = 'green'
    }
}

function createMenuItem(item) {
    let li = document.createElement('li');
    li.innerHTML = ''
    li.innerHTML = item;
    return li;
}



function absencesData(doc) {

    const dla = document.querySelector('#dataListAbsences');
    let absencesDatas = doc.data().faltas
    if (absencesDatas != undefined) {
        absencesDatas.forEach(absences => {
            dla.appendChild(createMenuItem(`<small>${absences.dia.toDate().toLocaleDateString()}</small><p>${absences.motivo}</p>`));
            createMenuItem(absences)
        });
    }

}


function occurrencesData(doc) {


    let occurrencesDatas = doc.data().ocorrencias
    const dlo = document.querySelector('#dataListOccurrences');
    if (occurrencesDatas != undefined) {
        occurrencesDatas.forEach(occurrences => {
            dlo.appendChild(createMenuItem(`<small>${occurrences.dia.toDate().toLocaleDateString()}</small><p>${occurrences.motivo}</p>`));
            createMenuItem(occurrences)
        });
    }

}
