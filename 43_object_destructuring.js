//object destructing 

const band={
    bandName:"Antima",
    famousName:"solanki",
};
//const bandName=band.bandName;
//const famousName=band.famousName;
//console.log(bandName,famousName);

const {bandname,famousName}=band;
console.log(bandName);