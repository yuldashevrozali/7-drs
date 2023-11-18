import {
    nameFilter,
    nameForm,
    yearFilter,
    yearForm,
    priceForm,
    colorForm,
    addBtn,
    statusFilter,
    search,
    tbody,
    form
} from "./const.js";

function volidate() {
    if (!nameForm.value) {
        nameForm.style.outlineColor = 'red'
        nameForm.focus();
        return;
    }

    if (!yearForm.value) {
        yearForm.style.outlineColor = 'red'
        yearForm.focus();
        return;
    }

    if (!priceForm.value) {
        priceForm.style.outlineColor = 'red'
        priceForm.focus();
        return;
    }

    if (!colorForm.value) {
        colorForm.style.outlineColor = 'red'
        colorForm.focus();
        return;
    }
}

addBtn && addBtn.addEventListener('click', function () {


    try {

        volidate();
        let data = JSON.parse(localStorage.getItem('cars')) || [];
        const car = {
            id: Date.now(),
            name: nameForm.value,
            year: yearForm.value,
            price: priceForm.value,
            color: colorForm.value,
            status: 'active'
        }

        data.push(car);
        form.reset();
        localStorage.setItem('cars', JSON.stringify(data));

        function createRow(car, index) {
            let status;
            if (car.status == 'active') {
                status = "Sotilmagan";
            } else if (car.status == 'inactive') {
                status = "Sotilgan";
            }
        
            let tr = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${car.name}</td>
                    <td>${car.color}</td>
                    <td>${car.price}</td>
                    <td>${car.year}</td>
                    <td>${status}</td>
                </tr>
            `;
        
            return tr;
        }
    } catch (error) {
        alert('xatolik yuz berdi')
    }
});

function createRow(car, index) {
    let status;
    if (car.status == 'active') {
        status = "Sotilmagan";
    } else if (car.status == 'inactive') {
        status = "Sotilgan";
    }

    let tr = `
        <tr>
            <td>${index + 1}</td>
            <td>${car.name}</td>
            <td>${car.color}</td>
            <td>${car.price}</td>
            <td>${car.year}</td>
            <td>${status}</td>
        </tr>
    `;

    return tr;
}

document.addEventListener('DOMContentLoaded', function () {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    if (cars.length) {
        let fakeDom = '';
        cars.forEach((car, index) => {
            let row = createRow(car, index); 
            fakeDom += row; 
        });
        tbody.innerHTML += fakeDom; 
    }
});

nameForm.addEventListener('change', function() {
    let selectedCar = this.value; 
    let selectedCars = data.filter(el => {
         return el.name == selectedCar;
    });
    createRow(selectedCars)
    
})


yearFilter.addEventListener('change', function() {
    let selectedYear = this.value; 
    let selectedYears = data.filter(yearFilter => {
         return el.year == selectedYear;
    });
    createRow(selectedYears)
    
})


priceForm.addEventListener('change', function() {
    let selectedPrice = this.value; 
    let selectedPrices = data.filter(el => {
         return el.price == selectedPrice;
    });
    createRow(selectedPrices)
    
})

colorForm.addEventListener('change', function() {
    let selectedColor = this.value; 
    let selectedColors = data.filter(el => {
         return el.color == selectedColor;
    });
    createRow(selectedColors)
    
});

window.onload = function() {
    if (data.length) {
         createRow(data)
    }
}
