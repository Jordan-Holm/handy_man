  
class Api::CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  def show
    @comment =
    Comment.find(params[:id])
    render json: @comment
  end

  def create
    @comment =
    Comment.new(comment_params)
    render json: @comment
  else
    renderjson: { errors: @comment.erros }, status: :unproccessable_entity
  end

  end

  def update
    @comment = Comment.find(params[:id])
    if
      @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @model_name.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: { message: 'model_name deleted' }
  end

  
end
