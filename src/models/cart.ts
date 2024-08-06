import{Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
    Unique,
    AllowNull,
    Default,
    }from 'sequelize-typescript'
import { Tableusers } from './tableUsers';

// import { ProductsCards } from './productCar';



    @Table({
    tableName:'cart',
    timestamps:true
})

export class cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @ForeignKey(() => Tableusers)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      userId!: number;
      
    
      @BelongsTo(() => Tableusers)
      tableuser!: Tableusers

  }