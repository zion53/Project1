
const getloc=()=>{
    const loc=document.querySelector(".locbar");
    const success=(position)=>{
        console.log(position);
        const lat=position.coords.latitude;
        const longi=position.coords.longitude;
        const getAPI=`https://us1.locationiq.com/v1/reverse.php?key=pk.b7a52b506b81aa06d13b171739585e55&lat=${lat}&lon=${longi}&format=json`
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