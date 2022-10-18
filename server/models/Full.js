
module.exports = (sequelize, DataTypes) => {
    
    const Full = sequelize.define("Full", {
        fid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATEONLY
        }
    },
    {
        tableName: "Full",
        timestamps: true, 
        paranoid: true
    }
    )

    return Full;
}