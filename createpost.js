
const getloc=()=>{
    const loc=document.querySelector(".locbar");
    const success=(position)=>{
        console.log(position);
        const lat=position.coords.latitude;
        const longi=position.coords.longitude;
        const getAPI=`https://us1.locationiq.com/v1/reverse.php?key=pk.55bb9ec29a7062d89a11137fd5f7878f&lat=${lat}&lon=${longi}&format=json`
        fetch(getAPI).then(res => res.json())
        .then(data =>{
            console.log(data);
            loc.textContent=data.display_name;
        }
        )
    }
    const error=() =>{
        console.log("unable to get location");
    }
    navigator.geolocation.getCurrentPosition(success,error)
}
window.addEventListener("load",getloc);
