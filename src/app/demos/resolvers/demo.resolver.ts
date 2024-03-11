import { ResolveFn } from '@angular/router';
import {Post} from "../interfaces/post.interface";
import {ApiPlaceholderService} from "../services/api-placeholder.service";
import {inject} from "@angular/core";

export const demoResolver: ResolveFn<Post[]> = (route, state) => {

  // const id : string | null = route.paramMap.get('id');
  return inject(ApiPlaceholderService).get();

};
