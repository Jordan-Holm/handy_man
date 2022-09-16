class Api::ListsController < ApplicationController
    before_action :set_list, only: [:show, :update, :destroy]
  
    # model name -> worker
    def index
      render json: Worker.all 
    end
  
    def show
      render json: @worker
    end
  
    def create
      @worker = Worker.new(worker_params)
      if @worker.save 
        render json: @worker
      else
        render json: { errors: @worker.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @worker.update(worker_params)
        render json: @worker
      else
        render json: { errors: @worker.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @worker.destroy
      render json: { message: 'Worker deleted' }
    end
  
    private 
      def worker_params
        params.require(:worker).permit(:first_name, :last_name, :position)
      end
  
      def set_list
        @worker = Worker.find(params[:id])
      end
  end