class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :image
      t.string :title
      t.string :description
      t.string :author
      t.integer :likes

      t.timestamps
    end
  end
end
