import{Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
    HasMany,
    Unique,
    AllowNull,
    Default,
    }from 'sequelize-typescript'
import { cart } from './cart';
import { productCar } from './productCar';





    @Table({
    tableName:'TableProducts',
    timestamps:true
})

export class TableProducts extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),// se define con varchar de 200 tal como lo dice en el moodle
        allowNull: false,
      })
      name!: string;

      @Column({
        type: DataType.FLOAT(10,2),
        allowNull: false,
      })
      price!:number;


    @Column({
        type: DataType.TEXT,
        allowNull: false,
      })
      description!:string

      @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      stock!:number

      @BelongsToMany(() => cart, () => productCar)
  cart!: cart[];


      

     
    
  }