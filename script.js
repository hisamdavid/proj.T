const mainName=document.querySelector('.main_name');
const navegation=document.querySelector('.navegation');
const logo=document.querySelector('.main_logo');
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 200){
    mainName.classList.add('delete');
    navegation.classList.add('delete');
    logo.classList.remove('delete');
    document.getElementById('navbar').style.justifyContent='center';
  }else{
    logo.classList.add('delete');
    mainName.classList.remove('delete');
    navegation.classList.remove('delete');
    document.getElementById('navbar').style.justifyContent='space-between';
  }
})

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});




const ctx1 = document.querySelector('.chart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Green', 'blue', 'yellow'],
        datasets: [{
            label: '',
            data: [12,5, 2],
            backgroundColor: [
                'rgb(114, 189, 90)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgb(114, 189, 90)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const ctx2 = document.querySelector('.chart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(114, 189, 90)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 20
    }]
  },
  options:{
    layout: {
      padding: 20
  }
  }
});
const ctx3 = document.querySelector('.chart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
  type: 'polarArea',
  data: {
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(114, 189, 90)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 20
    }]
  }
});

function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;

	return true;
}