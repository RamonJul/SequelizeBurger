
module.exports = function(sequelize,DataTypes){
    var burger = sequelize.define("burger", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowedNull:false,
            primaryKey:true
        },
        burger_name:{
            type:DataTypes.STRING,
            allowedNull:false,
            len:[1]
        },
        devoured:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }


    });

burger.sync()
return burger
}