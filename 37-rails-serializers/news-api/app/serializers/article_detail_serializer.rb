class ArticleDetailSerializer < ActiveModel::Serializer
    attributes :title, :description, :likes, :image
  
  end
  