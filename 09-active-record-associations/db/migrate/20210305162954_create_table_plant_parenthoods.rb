class CreateTablePlantParenthoods < ActiveRecord::Migration[5.2]
  def change
    create_table :plant_parenthoods do |table_helper|
      table_helper.boolean :favorite
      table_helper.integer :person_id
      table_helper.integer :plant_id
    end
  end
end
