import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const isAdmin = request.headers['x-admin'] === 'true'; // simple admin check

    if (!isAdmin) {
      throw new UnauthorizedException('Only admin can perform this action');
    }
    return true;
  }
}
