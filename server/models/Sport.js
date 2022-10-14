
module.exports = (sequelize, DataTypes) => {
    
    const Story = sequelize.define("Sport", {
        spid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        source: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    },
    {
        tableName: "Sport",
        timestamps: true, 
        paranoid: true
    }
    )

    return Story;
}