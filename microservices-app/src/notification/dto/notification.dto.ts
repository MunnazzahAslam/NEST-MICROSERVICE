import { IsNotEmpty, IsString } from "class-validator";

export class NotificationDto {

    @IsString()
    @IsNotEmpty()
    label: string
}