function getMedicineInfo() {
    const medicineName = document.getElementById('medicineName').value;
    const resultDiv = document.getElementById('result');
    const medicines = {
        'Paracetamol': {
            doses: '500mg - 1000mg',
            salts: 'Paracetamol',
            rate: '&#8377 42 per tablet',
            uses: 'Fever, Pain',
            sideEffects: 'Nausea, Rash',
            image: './Medicine Image/paracetamol.png'
        },
        'Ibuprofen': {
            doses: '200mg - 400mg',
            salts: 'Ibuprofen',
            rate: '&#8377 63 per tablet',
            uses: 'Pain, Inflammation',
            sideEffects: 'Stomach pain, Heartburn',
            image: './Medicine Image/ibuprofen.png'
        },
        'Asprin' : {
            doses: '75mg - 325mg' ,
            salts: 'Acetylsalicylic acid',
            rate: '&#8377 22.5 per tablet',
            uses :' Pain relief, fever reduction, anti-inflammatory effects',
            sideEffects: 'Gastrointestinal irritation, ulcers, bleeding',
            image: './Medicine Image/aspirin.png'
        },
        'Ciprofloxacin' :{
            doses:'250mg - 750mg',
            salts: 'Ciprofloxacin hydrochloride', 
            rate: ' &#8377 8.5 to &#8377 125 per tablet',
            uses : 'urinary tract infections, respiratory tract infections, skin infections',
            sideEffects: 'nausea, diarrhea, stomach pain, and headache',
            image: './Medicine Image/ciprofloxacin.png'
        },
        'Amoxicillin' :{
            doses:'250mg - 875mg',
            salts: 'Amoxicillin trihydrate', 
            rate: '&#8377 4 to &#8377 125 per tablet',
            uses : 'respiratory tract infections, ear infections, urinary tract infections, skin infections',
            sideEffects: 'nausea, vomiting, diarrhea, and rash',
            image: './Medicine Image/amoxicillin.png'
        },
        'Metformin' :{
            doses:'500mg - 1000mg' ,
            salts: 'Metformin hydrochloride',
            rate: '&#8377 4 to &#8377 42 per tablet',
            uses :'control blood sugar levels ',
            sideEffects:' diarrhea, nausea, and stomach upset',
            image: './Medicine Image/metformin.png'
        },
        'Omeprazole' :{
            doses:' 10mg - 40mg', 
            salts: 'Omeprazole magnesium',
            rate: '&#8377 8.5 - &#8377 85 per tablet',
            uses : '(GERD), stomach ulcers',
            sideEffects:'headache, nausea, diarrhea, and abdominal pain',
            image: './Medicine Image/Omeprazole.png'
        },
        'Atrovastatin' :{
            doses:' 10mg - 80mg',
            salts: ' Atorvastatin calcium', 
            rate: ' &#8377 8.5 - &#8377 125 per tablet',
            uses : ' lower cholesterol levels in the blood, reducing the risk of heart attack, stroke',
            sideEffects:'muscle pain, weakness,nausea and diarrhea',
            image: './Medicine Image/atrovastatin.png'
        },
        'Amlodipine' :{
            doses:' 2.5mg - 10mg',
            salts: 'Amlodipine besylate',
            rate: ' &#8377 4 - &#8377 42 tablet',
            uses : 'hypertension,angina',
            sideEffects:' swelling in the ankles or feet, dizziness, and flushing',
            image: './Medicine Image/Amlodipine.png'
        },
        'Losartan' :{
            doses:' 25mg - 100mg' ,
            salts: ' Losartan potassium',
            rate: '&#8377 8.5 - &#8377 85 per tablet',
            uses : 'hypertension, help protect the kidneys from damage due to diabetes',
            sideEffects:'dizziness, fatigue, and cough',
            image: './Medicine Image/losartan.png'
        },
        'Levocitrizine' :{
            doses:' 5mg tablets', 
            salts: ' Levocetirizine dihydrochloride',
            rate: ' &#8377 8.5 - &#8377 42 per tablet',
            uses : 'allergic rhinitis, hives urticaria, and allergic conjunctivitis',
            sideEffects:' drowsiness, dry mouth, and headache',
            image: './Medicine Image/levocetirizine.png'
       },
        'Montelukast':{
            doses:'10mg tablets',
            salts: 'Montelukast sodium',
            rate: ' &#8377 42 to &#8377 170 per tablet',
            uses : 'asthma,allergic rhinitis (hay fever) and exercise-induced bronchoconstriction',
            sideEffects:'headache, nausea, and diarrhea',
            image: './Medicine Image/montelukast.png'
        }
    };
    if (medicines.hasOwnProperty(medicineName)) {
        resultDiv.innerHTML = `<div class="medicine-info">
                    <img src="${medicines[medicineName].image}" alt="${medicineName} Image" class="medicine-image">
                    <div class="medicine-details">
                      <p><strong>Doses:</strong> ${medicines[medicineName].doses}</p>
                      <p><strong>Salts:</strong> ${medicines[medicineName].salts}</p>
                      <p><strong>Rate:</strong> ${medicines[medicineName].rate}</p>
                      <p><strong>Uses:</strong> ${medicines[medicineName].uses}</p>
                      <p><strong>Side Effects:</strong> ${medicines[medicineName].sideEffects}</p>
                    </div>
                  </div>`;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = `<div class="medicine-info">
                        <p>No information available for this medicine.</p>;
                        </div>`;
        resultDiv.style.display = 'block';
    }
    // Fetch medicine data from a real database or API
    // fetch(`/api/medicines?name=${medicineName}`)
    //     .then(response => response.json())
    //     .then(medicines => {
    //         if (medicines.length === 0) {
    //             medicineNames.innerHTML = '<li>No medicine found</li>';
    //         } else {
    //             medicineNames.innerHTML = '';
    //             medicines.forEach(medicine => {
    //                 medicineNames.innerHTML += `<li>${medicine.name} - ${medicine.description}</li>`;
    //             });
    //         }
    //     });

    // document.getElementById('medicine-list').style.display = 'block';
}
function displayMedicineList() {
    const medicineListDiv = document.getElementById('medicine-list');
    const medicines = {
        'Paracetamol': {
            doses: '500mg - 1000mg',
            salts: 'Paracetamol',
            rate: '&#8377 42 per tablet',
            uses: 'Fever, Pain',
            sideEffects: 'Nausea, Rash',
            image: './Medicine Image/paracetamol.png'
        },
        'Ibuprofen': {
            doses: '200mg - 400mg',
            salts: 'Ibuprofen',
            rate: '&#8377 63 per tablet',
            uses: 'Pain, Inflammation',
            sideEffects: 'Stomach pain, Heartburn',
            image: './Medicine Image/ibuprofen.png'
        },
        'Asprin' : {
            doses: '75mg - 325mg' ,
            salts: 'Acetylsalicylic acid',
            rate: '&#8377 22.5 per tablet',
            uses :' Pain relief, fever reduction, anti-inflammatory effects',
            sideEffects: 'Gastrointestinal irritation, ulcers, bleeding',
            image: './Medicine Image/aspirin.png'
        },
        'Ciprofloxacin' :{
            doses:'250mg - 750mg',
            salts: 'Ciprofloxacin hydrochloride', 
            rate: ' &#8377 8.5 to &#8377 125 per tablet',
            uses : 'urinary tract infections, respiratory tract infections, skin infections',
            sideEffects: 'nausea, diarrhea, stomach pain, and headache',
            image: './Medicine Image/ciprofloxacin.png'
        },
        'Amoxicillin' :{
            doses:'250mg - 875mg',
            salts: 'Amoxicillin trihydrate', 
            rate: '&#8377 4 to &#8377 125 per tablet',
            uses : 'respiratory tract infections, ear infections, urinary tract infections, skin infections',
            sideEffects: 'nausea, vomiting, diarrhea, and rash',
            image: './Medicine Image/amoxicillin.png'
        },
        'Metformin' :{
            doses:'500mg - 1000mg' ,
            salts: 'Metformin hydrochloride',
            rate: '&#8377 4 to &#8377 42 per tablet',
            uses :'control blood sugar levels ',
            sideEffects:' diarrhea, nausea, and stomach upset',
            image: './Medicine Image/metformin.png'
        },
        'Omeprazole' :{
            doses:' 10mg - 40mg', 
            salts: 'Omeprazole magnesium',
            rate: '&#8377 8.5 - &#8377 85 per tablet',
            uses : '(GERD), stomach ulcers',
            sideEffects:'headache, nausea, diarrhea, and abdominal pain',
            image: './Medicine Image/Omeprazole.png'
        },
        'Atrovastatin' :{
            doses:' 10mg - 80mg',
            salts: ' Atorvastatin calcium', 
            rate: ' &#8377 8.5 - &#8377 125 per tablet',
            uses : ' lower cholesterol levels in the blood, reducing the risk of heart attack, stroke',
            sideEffects:'muscle pain, weakness,nausea and diarrhea',
            image: './Medicine Image/atrovastatin.png'
        },
        'Amlodipine' :{
            doses:' 2.5mg - 10mg',
            salts: 'Amlodipine besylate',
            rate: ' &#8377 4 - &#8377 42 tablet',
            uses : 'hypertension,angina',
            sideEffects:' swelling in the ankles or feet, dizziness, and flushing',
            image: './Medicine Image/Amlodipine.png'
        },
        'Losartan' :{
            doses:' 25mg - 100mg' ,
            salts: ' Losartan potassium',
            rate: '&#8377 8.5 - &#8377 85 per tablet',
            uses : 'hypertension, help protect the kidneys from damage due to diabetes',
            sideEffects:'dizziness, fatigue, and cough',
            image: './Medicine Image/losartan.png'
        },
        'Levocitrizine' :{
            doses:' 5mg tablets', 
            salts: ' Levocetirizine dihydrochloride',
            rate: ' &#8377 8.5 - &#8377 42 per tablet',
            uses : 'allergic rhinitis, hives urticaria, and allergic conjunctivitis',
            sideEffects:' drowsiness, dry mouth, and headache',
            image: './Medicine Image/levocetirizine.png'
       },
        'Montelukast':{
            doses:'10mg tablets',
            salts: 'Montelukast sodium',
            rate: ' &#8377 42 to &#8377 170 per tablet',
            uses : 'asthma,allergic rhinitis (hay fever) and exercise-induced bronchoconstriction',
            sideEffects:'headache, nausea, and diarrhea',
            image: './Medicine Image/montelukast.png'
        }
    };
  
    let html = '';
  
    for (const medicineName in medicines) {
      if (medicines.hasOwnProperty(medicineName)) {
        const medicine = medicines[medicineName];
        html += `<div class="medicine-box">
                    <div class="medicine-details">
                      <p><strong>Doses:</strong> ${medicine.doses}</p>
                      <p><strong>Salts:</strong> ${medicine.salts}</p>
                      <p><strong>Rate:</strong> ${medicine.rate}</p>
                      <p><strong>Uses:</strong> ${medicine.uses}</p>
                      <p><strong>Side Effects:</strong> ${medicine.sideEffects}</p>
                    </div>
                    <img src="${medicine.image}" alt="${medicineName} Image" class="medicineimage">
                  </div>`;
      }
    }
  
    medicineListDiv.innerHTML = html;
    medicineListDiv.style.display = 'flex';
    medicineListDiv.style.flexWrap = 'wrap';
  }
  
  displayMedicineList();