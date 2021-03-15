class AddSloganToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :slogan, :string
  end
end
