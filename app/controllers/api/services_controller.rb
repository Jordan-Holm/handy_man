class Api::ServicesController < ApplicationController

    before_action :set_parent
    before_action :set_service, only: [:show, :update, :destroy]

    def index
        render json: @worker.service.all
    end

    def show
        render json: @service
    end

    def create

        @service = @worker.service.new(set_params)
        if @service.save
            render json:@service
        else
            render json: { errors: @service.errors}, status: :unprocessable_entity
        end

    end

    def update

        if @service.update(set_params)
            render json: @service
        else
            render json: { errors: @service.errors}, status: :unprocessable_entity
        end

    end

    def destroy

        @service.destroy
        render json: { message: 'service deleted' }

    end

    private
        
        def set_parent
            @worker = Worker.find(params[:worker_id])
        end

        def set_service
            @service = @worker.service.find(params[:id])
        end

        def set_params
            params.require(:service).permit( :name, :type, :location, :info )
        end


end
