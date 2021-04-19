class AuthorSerializer < ActiveModel::Serializer
  attributes :name, :age, :specialty, :id

  has_many :articles, serializer: ArticleDetailSerializer
end
