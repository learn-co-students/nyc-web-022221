class AddImgUrlToSnacks < ActiveRecord::Migration[6.1]
  def change
    add_column :snacks, :img_url, :string
  end
end
