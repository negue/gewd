import { InjectionToken } from '@angular/core';
import { MarkdownServiceOptions } from '@gewd/markdown/contracts';

export const MarkdownOptionsInjectorToken = new InjectionToken<MarkdownServiceOptions>('MarkdownOptionsInjectorToken');
