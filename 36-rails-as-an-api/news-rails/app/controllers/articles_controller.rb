class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show edit update destroy ]

  def index
    @articles = Article.all
    render :index
  end

  def show
    render :show
  end

  def new
    @article = Article.new
    render :new
  end

  # GET /articles/1/edit
  def edit
    render :edit
  end

  # POST /articles or /articles.json
  def create
    @article = Article.create(article_params)
    redirect_to @article
  end

  # PATCH/PUT /articles/1 or /articles/1.json
  def update
    @article.update(article_params)
    redirect_to @article
  end

  # DELETE /articles/1 or /articles/1.json
  def destroy
    @article.destroy
    redirect_to articles_url
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def article_params
    params.require(:article).permit(:title, :image, :likes, :author, :description)
  end
end
