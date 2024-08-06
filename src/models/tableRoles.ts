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


    @Table({
    tableName:'TableRols',
    timestamps:false
})

export class TableRols extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      name!: string;

      @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      description!: string;


      @HasMany(()=>Tableusers)
      Tableusers!:Tableusers[]

    
  }