class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :likes, :image, :author_name

  # belongs_to :author

  def author_name
    self.object.author.name
  end
end
