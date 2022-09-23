interface NodeLibraryProps {
  name: string;
  status: boolean;
}

export class NodeLibrary {
  constructor(protected readonly props: NodeLibraryProps) {}
  
  toJSON(): Record<string, any> {
    return this.props;
  }
}
