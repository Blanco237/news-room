
module.exports = (sequelize, DataTypes) => {
    
    const MostRead = sequelize.define("MostRead", {
        mrid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        tableName: "MostRead",
        timestamps: true, 
        paranoid: true
    }
    )

    return MostRead;
}