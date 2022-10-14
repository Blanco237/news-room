
module.exports = (sequelize, DataTypes) => {
    
    const Story = sequelize.define("Full", {
        fid: {
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
        tableName: "Full",
        timestamps: true, 
        paranoid: true
    }
    )

    return Story;
}