interface NodeLibraryProps {
  name: string;
  description: string;
  status: boolean;
}

export class NodeLibrary {
  constructor(protected readonly props: NodeLibraryProps) {}

  getFullName(): string {
    return this.props.name + this.props.description;
  }
  
  toJSON(): Record<string, any> {
    return this.props;
  }
}
