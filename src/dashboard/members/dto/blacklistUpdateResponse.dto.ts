import { APIResponseDto } from 'src/common/dto/APIResponse.dto';

export class blacklistUpdateResponseDto extends APIResponseDto {
  /**
   * 상태 코드 (ENUM)
   * @example 'OPERATION_COMPLETE'
   */
  code: string;

  /**
   * HTTP 상태 코드
   * @example 200
   */
  status: number;

  message: string;
}

export default blacklistUpdateResponseDto;
