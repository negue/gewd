import { ChangeDetectorRef } from '@angular/core';

export interface PropInfo {
  type: string;
  canEdit: boolean;
}

export interface InstanceProp {
  propInfo: PropInfo;
  key: string;
  editMode: boolean;
}

export interface ContextWithCd {
  instance: any;
  cd: ChangeDetectorRef;
}

export interface InstanceWithProps {
  context: ContextWithCd;
  entries: InstanceProp[];
  name: string;
  keys?: string[];
}

export interface PinnedPayload {
  pinned: string[];
}
