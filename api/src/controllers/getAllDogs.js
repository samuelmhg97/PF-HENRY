const {getApiInfo} = require('./getApiInfo');
const {getDbInfo} = require('./getDbInfo');
const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const array = await dbInfo.map(ite => ite.temperaments=ite.temperaments.map(it => it.name)[0])  // test 1
    const array2 = await apiInfo.map(item => item.temperaments=item.temperaments?item.temperaments.replace(/\s+/g, '').split(','):[]); // test 1
   console.log(array)
    const totalInfo = await dbInfo.concat(apiInfo).sort((a,b) => {
        return a.name < b.name ? -1 : 1;
    })
    ;
    return totalInfo;
}


module.exports = {
    getAllDogs,
}