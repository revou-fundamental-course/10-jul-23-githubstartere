const btn = document.getElementById('BMI');

btn.addEventListener('click', function(){
    let KG = document.querySelector('#KG').value;
    let CM = document.querySelector('#CM').value;

    if(KG == '' || CM == ''  ||Age == '' )
    {
        alert ('Silahkan isi berat badan, tinggi dan usia ');
        return;
    }

    let BMI = ((parseInt(KG) / ((parseInt(CM)**2)
    / 10000)).toFixed(2))

    document.querySelector('#result').innerHTML = BMI;
    event.preventDefault()
    let status = '';
 
    if(BMI < 18.5){
        status = "Underweight";
    }
    if(BMI >= 18.5 && BMI <= 24.9){
        status = "Normal";
    }
    if(BMI > 25 && BMI < 30){
        status = "Overweight";
    }
    if(BMI >= 30){
        status = "Obese";
    }
 
    document.querySelector('.comment').innerHTML = `STATUS: <span>${status}</span>`;
});

function resetForm ()
{document.getElementById (form).reset()}
