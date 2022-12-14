  
class Api::CommentsController < ApplicationController
  before_action :set_parent
  before_action :set_comment, only: [:show, :update, :destroy]
  
  def index
    render json: @service.comment.all
  end

  def show
    render json: @comment
  end

  def create
    @comment = @service.comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      renderjson: { errors: @comment.errors }, status: :unproccessable_entity
    end
  end

  def update
    @comment = @service.comment.find(params[:id])
    if
      @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = @service.comment.find(params[:id])
    @comment.destroy
    render json: { message: 'comment deleted' }
  end

  
  private

  def set_comment
      @comment = @service.comment.find(params[:id])
  end

  def set_parent
     @service = Service.find(params[:service_id])
  end

  def set_params
      params.require(:comment).permit( :title, :desc )
  end
  
end
