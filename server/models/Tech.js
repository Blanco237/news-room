
module.exports = (sequelize, DataTypes) => {
    
    const Story = sequelize.define("Tech", {
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
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        tableName: "Tech",
        timestamps: true, 
        paranoid: true
    }
    )

    return Story;
}